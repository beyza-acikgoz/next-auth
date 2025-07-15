import { NextResponse } from "next/server";
import { verifyJwtToken } from "@/lib/auth";

export async function GET(request: Request) {
  // Next.js 13 route handler için cookie alma şekli:
  const cookieHeader = request.headers.get("cookie") || "";
  const cookies = Object.fromEntries(
    cookieHeader.split("; ").map(c => {
      const [key, ...v] = c.split("=");
      return [key, decodeURIComponent(v.join("="))];
    })
  );
  const token = cookies.token ?? null;

  if (!token) {
    return NextResponse.json({ authenticated: false });
  }

  const payload = await verifyJwtToken(token);
  if (!payload) {
    return NextResponse.json({ authenticated: false });
  }

  return NextResponse.json({ authenticated: true, user: payload });
}
