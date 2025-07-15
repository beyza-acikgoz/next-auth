import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

const AUTH_PAGES = ["/login", "/register"];
const PROTECTED_PAGES = ["/shop", "/dropshipping"];

export async function middleware(request) {
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });
  const { pathname } = request.nextUrl;

  const isAuthPage = AUTH_PAGES.some((page) => pathname.startsWith(page));
  const isProtectedPage = PROTECTED_PAGES.some((page) => pathname.startsWith(page));

  if (isAuthPage) {
    if (token) {
      return NextResponse.redirect(new URL("/", request.url));
    }
    return NextResponse.next();
  }

  if (isProtectedPage && !token) {
    const loginUrl = new URL(`/login?next=${encodeURIComponent(pathname)}`, request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/register", "/shop/:path*", "/dropshipping/:path*"],
};
