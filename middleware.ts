import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { decodeJwt } from "./utils/decodeJwt";

export function middleware(request: NextRequest) {
  const accessToken = request.cookies.get("accessToken")?.value;
  const url = request.nextUrl.clone();

  const isLoginRoute = url.pathname === "/login";
  if (isLoginRoute) {
    if (!accessToken) {
      return NextResponse.next();
    }

    const { payload, isExpired } = decodeJwt(accessToken as string);

    if (payload && !isExpired) {
      url.pathname = "/products";
      return NextResponse.redirect(url);
    }

    return NextResponse.next();
  }

  const protectedRoutes = [
    "/products",
    "/sales",
    "/stocks",
    "/dashboard",
    "/cart",
    "/promotions",
  ];

  const isProtectedRoute = protectedRoutes.some((route) =>
    url.pathname.startsWith(route),
  );

  if (isProtectedRoute) {
    if (!accessToken) {
      url.pathname = "/login";
      return NextResponse.redirect(url);
    }

    const { payload, isExpired } = decodeJwt(accessToken as string);

    if (!payload || isExpired) {
      url.pathname = "/login";
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/login/:path*",
    "/products/:path*",
    "/sales/:path*",
    "/stocks/:path*",
    "/dashboard/:path*",
    "/cart/:path*",
    "/promotions/:path*",
  ],
};
