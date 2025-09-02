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
    "/carts",
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

// export async function middleware(request: NextRequest) {
//   const accessToken = request.cookies.get("accessToken")?.value;
//   const url = request.nextUrl.clone();
//   const isLoginRoute = url.pathname === "/login";

//   const protectedRoutes = [
//     "/products",
//     "/sales",
//     "/stocks",
//     "/dashboard",
//     "/carts",
//     "/promotions",
//   ];

//   const isProtectedRoute = protectedRoutes.some((route) =>
//     url.pathname.startsWith(route),
//   );

//   // Handle login route
//   if (isLoginRoute) {
//     if (!accessToken) {
//       // No access token, try to refresh
//       try {
//         await getAccessToken();
//         url.pathname = "/products";
//         return NextResponse.redirect(url);
//       } catch (error) {
//         console.error("Failed to refresh token on login route:", error);
//       }
//       // Stay on login page if refresh fails
//       return NextResponse.next();
//     }

//     // Check if existing token is valid
//     const user = decodeJwt(accessToken) as any;
//     if (user && !user.isExpired) {
//       // Valid token, redirect to products
//       url.pathname = "/products";
//       return NextResponse.redirect(url);
//     }

//     // Token expired, try to refresh
//     try {
//       await getAccessToken();
//       url.pathname = "/products";
//       return NextResponse.redirect(url);
//     } catch (error) {
//       console.error("Failed to refresh expired token on login route:", error);
//     }

//     // Stay on login page if refresh fails
//     return NextResponse.next();
//   }

//   // Handle protected routes
//   if (isProtectedRoute) {
//     // Check for Access Token on every request to protected routes
//     if (!accessToken) {
//       // No access token, try to refresh
//       try {
//         await getAccessToken();
//         console.log("Refreshed token");
//         return NextResponse.next();
//       } catch (error) {
//         console.error("Failed to refresh token:", error);
//       }

//       // If refresh fails, redirect to login
//       url.pathname = "/login";
//       return NextResponse.redirect(url);
//     }

//     // Check if Access Token is expired
//     const user = decodeJwt(accessToken) as any;
//     if (!user || user.isExpired) {
//       // Access Token expired, try to refresh using Refresh Token
//       try {
//         await getAccessToken();
//         return NextResponse.next();
//       } catch (error) {
//         console.error("Failed to refresh expired token:", error);
//       }

//       // If refresh fails, redirect to login
//       url.pathname = "/login";
//       return NextResponse.redirect(url);
//     }

//     // // Token is valid, check role-based access
//     // const managerOnlyRoutes = ["/stocks", "/dashboard"];
//     // const isManagerRoute = managerOnlyRoutes.some((route) =>
//     //   url.pathname.startsWith(route),
//     // );

//     // if (isManagerRoute && user.role !== "manager") {
//     //   url.pathname = "/products";
//     //   return NextResponse.redirect(url);
//     // }

//     return NextResponse.next();
//   }

//   return NextResponse.next();
// }

export const config = {
  matcher: [
    "/login/:path*",
    "/products/:path*",
    "/sales/:path*",
    "/stocks/:path*",
    "/dashboard/:path*",
    "/carts/:path*",
    "/promotions/:path*",
  ],
};
