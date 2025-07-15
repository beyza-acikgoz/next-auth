import { NextResponse } from "next/server";
import { verifyJwtToken } from "@/lib/auth";

export async function GET(request) {
  const token = request.cookies.get("token")?.value ?? null;
  if (!token) {
    return NextResponse.json({ authenticated: false });
  }

  const payload = await verifyJwtToken(token);
  if (!payload) {
    return NextResponse.json({ authenticated: false });
  }

  return NextResponse.json({ authenticated: true, user: payload });
}
