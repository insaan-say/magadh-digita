import { NextRequest, NextResponse } from "next/server";
import { analyticsSchema } from "@/lib/validation";
import { hasSupabaseConfig } from "@/lib/server/env";
import { getRequestMeta } from "@/lib/server/request-meta";
import { isRateLimited } from "@/lib/server/rate-limit";
import { createServerSupabaseClient } from "@/lib/server/supabase";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  const meta = getRequestMeta(request);

  if (isRateLimited(`analytics:${meta.ip}`, 60, 60_000)) {
    return NextResponse.json({ ok: false }, { status: 429 });
  }

  if (!hasSupabaseConfig()) {
    return NextResponse.json({ ok: true, skipped: true });
  }

  try {
    const payload = analyticsSchema.parse(await request.json());
    const supabase = createServerSupabaseClient();

    await supabase.from("analytics_events").insert({
      session_id: payload.sessionId,
      event_name: payload.eventName,
      path: payload.path,
      source: payload.source || meta.source,
      device_type: meta.deviceType,
      city: meta.city || null,
      country: meta.country || null,
      duration_seconds: payload.durationSeconds || null,
      user_agent: meta.userAgent
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
