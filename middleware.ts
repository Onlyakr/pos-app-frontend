import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { decodeJwt } from "./utils/decodeJwt";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("accessToken")?.value;
  const path = request.nextUrl.pathname;

  console.log(token);

  // Login routes
  const isLoginRoute = path.startsWith("/login");

  if (isLoginRoute) {
    if (token) {
      const user = decodeJwt(token);
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

    const user = decodeJwt(token);

    console.log(user);
    // if (!user || user?.role !== "manager") {
    //   return NextResponse.redirect(new URL("/products", request.url));
    // }

    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/stocks/:path*", "/dashboard/:path*", "/login/:path*"],
};
