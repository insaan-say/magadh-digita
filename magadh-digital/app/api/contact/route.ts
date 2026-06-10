import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { contactSchema } from "@/lib/validation";
import { sendInquiryEmail } from "@/lib/server/mailer";
import { getRequestMeta } from "@/lib/server/request-meta";
import { isRateLimited } from "@/lib/server/rate-limit";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  const meta = getRequestMeta(request);

  if (isRateLimited(`contact:${meta.ip}`, 4, 60_000)) {
    return NextResponse.json(
      { ok: false, message: "Too many attempts. Please try again in a minute." },
      { status: 429 }
    );
  }

  try {
    const payload = contactSchema.parse(await request.json());
    const elapsed = Date.now() - payload.startedAt;

    if (payload.website || elapsed < 1800) {
      return NextResponse.json(
        { ok: false, message: "Spam protection blocked this submission." },
        { status: 400 }
      );
    }

    const mail = await sendInquiryEmail(payload);

    if (mail.status !== "sent") {
      return NextResponse.json(
        {
          ok: false,
          message: mail.error || "Unable to send inquiry email."
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      ok: true,
      message: "Your inquiry has been sent successfully. We will contact you soon."
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { ok: false, message: error.issues[0]?.message || "Invalid form data." },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        ok: false,
        message:
          error instanceof Error ? error.message : "Unable to submit inquiry."
      },
      { status: 500 }
    );
  }
}
