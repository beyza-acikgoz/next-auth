import { NextResponse } from "next/server";
import { verifyJwtToken } from "@/lib/auth";

const AUTH_PAGES = ["/login", "/register"];

// Burada auth gerektiren sayfaları ekledim
const PROTECTED_PAGES = ["/shop", "/dropshipping"];

const isAuthPage = (url) => AUTH_PAGES.some((page) => url.startsWith(page));
const isProtectedPage = (url) => PROTECTED_PAGES.some((page) => url.startsWith(page));

export async function middleware(request) {
  const { url, nextUrl, cookies } = request;
  const token = cookies.get("token")?.value ?? null;

  const hasVerifiedToken = token ? await verifyJwtToken(token) : null;
  const isAuthPageRequested = isAuthPage(nextUrl.pathname);
  const isProtectedPageRequested = isProtectedPage(nextUrl.pathname);

  // Eğer login veya register sayfasına gidiliyorsa
  if (isAuthPageRequested) {
    if (!hasVerifiedToken) {
      const response = NextResponse.next();
      response.cookies.delete("token");
      return response;
    }
    return NextResponse.redirect(new URL("/", url));
  }

  // Eğer korumalı sayfalardan biriyse ve kullanıcı doğrulanmamışsa login sayfasına gönder
  if (isProtectedPageRequested && !hasVerifiedToken) {
    const searchParams = new URLSearchParams(nextUrl.searchParams);
    searchParams.set("next", nextUrl.pathname);
    const loginUrl = new URL(`/login?${searchParams.toString()}`, url);
    const response = NextResponse.redirect(loginUrl);
    response.cookies.delete("token");
    return response;
  }

  // Diğer tüm durumlarda devam et
  return NextResponse.next();
}

// matcher'a korumalı sayfaları ve login, register sayfalarını ekleyelim
export const config = {
  matcher: ["/login", "/register", "/shop/:path*", "/dropshipping/:path*"],
};
