import { NextRequest } from "next/server";

export function getClientIp(request: NextRequest) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

export function getDeviceType(userAgent = "") {
  const ua = userAgent.toLowerCase();
  if (/tablet|ipad/.test(ua)) return "tablet";
  if (/mobile|android|iphone|ipod/.test(ua)) return "mobile";
  return "desktop";
}

export function getRequestMeta(request: NextRequest) {
  const userAgent = request.headers.get("user-agent") || "";
  const referrer = request.headers.get("referer") || "";
  const source = request.nextUrl.searchParams.get("utm_source") || referrer || "direct";

  return {
    ip: getClientIp(request),
    userAgent,
    source,
    deviceType: getDeviceType(userAgent),
    city: decodeURIComponent(request.headers.get("x-vercel-ip-city") || ""),
    country: request.headers.get("x-vercel-ip-country") || ""
  };
}
