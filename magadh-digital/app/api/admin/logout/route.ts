import { NextResponse } from "next/server";
import { getAdminCookieName } from "@/lib/server/admin-auth";

export async function POST() {
  const response = NextResponse.json({ ok: true });
  response.cookies.delete(getAdminCookieName());
  return response;
}
