import { NextResponse } from "next/server";
import { timingSafeEqual } from "crypto";
import { COOKIE_NAME, signSession } from "../_session";

export async function POST(req: Request) {
  const { password } = await req.json();

  const a = Buffer.from(String(password ?? ""));
  const b = Buffer.from(process.env.ADMIN_PASSWORD ?? "");
  const ok = b.length > 0 && a.length === b.length && timingSafeEqual(a, b);

  if (!ok) {
    return NextResponse.json({ error: "Credencial inválida" }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set(COOKIE_NAME, signSession(), {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 8,
  });
  return res;
}
