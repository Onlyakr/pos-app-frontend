import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtDecode } from "jwt-decode";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("jwt")?.value;
  const path = request.nextUrl.pathname;

  // Login routes
  const isLoginRoute = path.startsWith("/login");

  if (isLoginRoute) {
    if (token) {
      const user = jwtDecode(token);
      if (user) {
        return NextResponse.redirect(new URL("/products", request.url));
      }
      return NextResponse.next();
    }
  }

  // Manager routes
  const isManagerRoute =
    path.startsWith("/stocks") || path.startsWith("/dashboard");

  if (isManagerRoute) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    const user = jwtDecode(token);

    // if (!user || user.role !== "manager") {
    //   return NextResponse.redirect(new URL("/products", request.url));
    // }

    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/stocks/:path*", "/dashboard/:path*", "/login/:path*"],
};
