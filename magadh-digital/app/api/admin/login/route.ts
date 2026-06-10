import { NextRequest, NextResponse } from "next/server";
import { createAdminToken, getAdminCookieName } from "@/lib/server/admin-auth";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  const { password } = (await request.json()) as { password?: string };
  const expected = process.env.MAGADH_ADMIN_PASSWORD;

  if (!expected || password !== expected) {
    return NextResponse.json(
      { ok: false, message: "Invalid admin password." },
      { status: 401 }
    );
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(getAdminCookieName(), createAdminToken(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 8,
    path: "/"
  });

  return response;
}
