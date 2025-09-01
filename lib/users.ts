import { loginFormSchema } from "@/schemas/authSchema";
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
  if (!res.ok) throw new Error("Failed to login");
  const data = await res.json();
  return data;
};

export const logOutUser = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/logout`, {
    method: "POST",
    credentials: "include",
  });
  if (!res.ok) throw new Error("Failed to logout");
  const data = await res.json();
  return data;
};

export const userInfo = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/me`, {
    method: "GET",
    credentials: "include",
  });
  const data = await res.json();
  return data;
};

export const getAccessToken = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/refresh`, {
    method: "POST",
    credentials: "include",
  });
  const data = await res.json();
  return data;
};
