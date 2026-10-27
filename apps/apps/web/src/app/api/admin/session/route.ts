import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { COOKIE_NAME, signSession } from "../_session";

export async function GET() {
  const token = (await cookies()).get(COOKIE_NAME)?.value;
  return NextResponse.json({ authenticated: token === signSession() });
}
