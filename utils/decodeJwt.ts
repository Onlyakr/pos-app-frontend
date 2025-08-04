import { jwtDecode } from "jwt-decode";

export function decodeJwt(token: string) {
  try {
    const decoded = jwtDecode(token);
    console.log(decoded);
    // if (decoded.exp && decoded.exp * 1000 < Date.now()) {
    //   console.log("Token has expired.");
    // }
    return decoded;
  } catch (error) {
    console.error("Invalid token:", error);
    return null;
  }
}
