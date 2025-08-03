import { loginFormSchema } from "@/schemas/authSchema";
// import { cookies } from "next/headers";
import { z } from "zod";

export const loginUser = async (values: z.infer<typeof loginFormSchema>) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
    credentials: "include",
  });
  if (!res.ok) {
    throw new Error("Login failed");
  }
  const data = await res.json();
  return data;
};

export const logOutUser = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/logout`, {
    method: "POST",
    credentials: "include",
  });
  // if (!res.ok) {
  //   throw new Error("Logout failed");
  // }
  console.log(res);
  const data = await res.json();
  return data;
};

// export const getToken = async () => {
//   const cookieStore = await cookies();
//   const token = cookieStore.get("jwt")?.value;
//   if (!token) {
//     throw new Error("No token found");
//   }
//   return token;
// };
