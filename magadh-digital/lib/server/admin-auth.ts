import { createHmac, timingSafeEqual } from "node:crypto";

const COOKIE_NAME = "magadh_admin_session";

export function getAdminCookieName() {
  return COOKIE_NAME;
}

function getSecret() {
  return process.env.ADMIN_SESSION_SECRET || process.env.MAGADH_ADMIN_PASSWORD || "";
}

export function createAdminToken() {
  const secret = getSecret();
  if (!secret) return "";
  return createHmac("sha256", secret).update("magadh-admin").digest("hex");
}

export function verifyAdminToken(token?: string) {
  const expected = createAdminToken();
  if (!token || !expected || token.length !== expected.length) return false;

  return timingSafeEqual(Buffer.from(token), Buffer.from(expected));
}
