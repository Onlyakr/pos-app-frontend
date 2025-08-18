import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { decodeJwt } from "./utils/decodeJwt";
import { getAccessToken } from "./lib/users";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("accessToken");
  const cookieStore = request.cookies.getAll();
  // const token = cookieStore.get("accessToken")?.value;
  const path = request.nextUrl.pathname;

  // console.log(cookieStore);

  if (token) {
    const user = decodeJwt(token);
    console.log(user);
  }

  // if (!token) {
  //   try {
  //     const res = await getAccessToken();
  //     console.log(res);
  //   } catch (error) {
  //     console.error(error);
  //   }

  //   return NextResponse.redirect(new URL("/login", request.url));
  // }

  // // Login routes
  // const isLoginRoute = path.startsWith("/login");

  // if (isLoginRoute) {
  //   if (token) {
  //     if (token) {
  //       return NextResponse.redirect(new URL("/products", request.url));
  //     }
  //     return NextResponse.next();
  //   }
  // }

  // Cashier routes
  //   const isCashierRoute =
  //     path.startsWith("/products") || path.startsWith("/sales");

  //   if (isCashierRoute) {
  //     if (!token) {
  //       return NextResponse.redirect(new URL("/login", request.url));
  //     }
  //   }

  //   // Manager routes
  //   const isManagerRoute =
  //     path.startsWith("/stocks") || path.startsWith("/dashboard");

  //   if (isManagerRoute) {
  //     if (!token) {
  //       return NextResponse.redirect(new URL("/login", request.url));
  //     }

  //     const user = decodeJwt(token);

  //     console.log(user);
  //     // if (!user || user?.role !== "manager") {
  //     //   return NextResponse.redirect(new URL("/products", request.url));
  //     // }

  //     return NextResponse.next();
  //   }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/login/:path*",
    "/products/:path*",
    "/sales/:path*",
    "/stocks/:path*",
    "/dashboard/:path*",
  ],
};
