import { createHmac } from "crypto";

export const COOKIE_NAME = "admin_session";

export function signSession() {
  return createHmac("sha256", process.env.ADMIN_SESSION_SECRET ?? "")
    .update("admin")
    .digest("hex");
}
