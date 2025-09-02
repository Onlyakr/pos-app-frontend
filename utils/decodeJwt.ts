import { jwtDecode } from "jwt-decode";

interface DecodedToken {
  exp?: number;
  iat?: number;
  [key: string]: any;
}

interface DecodedResult {
  payload: DecodedToken | null;
  isExpired: boolean;
  message?: string;
}

export function decodeJwt(token: string): DecodedResult {
  try {
    const decoded = jwtDecode(token) as DecodedToken;

    if (decoded.exp && decoded.exp * 1000 < Date.now()) {
      console.log("Token has expired.");
      return {
        payload: decoded,
        isExpired: true,
        message: "Token has expired.",
      };
    }

    return { payload: decoded, isExpired: false };
  } catch (error) {
    console.error("Invalid token:", error);
    return { payload: null, isExpired: true, message: "Invalid token" };
  }
}
