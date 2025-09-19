import { loginFormSchema } from "@/components/auth/LoginForm";
import { z } from "zod";
import { apiWrapper } from "./apiWrapper";

export const loginUser = async (values: z.infer<typeof loginFormSchema>) => {
  const res = await apiWrapper(
    `${process.env.NEXT_PUBLIC_API_URL}/user/login`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    },
  );
  if (!res.ok) throw new Error("Failed to login");
  // const data = await res.json();
  return res;
};

export const logOutUser = async () => {
  const res = await apiWrapper(
    `${process.env.NEXT_PUBLIC_API_URL}/user/logout`,
    {
      method: "POST",
    },
  );
  if (!res.ok) throw new Error("Failed to logout");
  // const data = await res.json();
  return res;
};

export const getManager = async () => {
  const res = await apiWrapper(
    `${process.env.NEXT_PUBLIC_API_URL}/user/manager`,
    {
      method: "GET",
      credentials: "include",
    },
  );
  return res;
};

export const getAccessToken = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/refresh`, {
    method: "POST",
    credentials: "include",
  });
  return res;
};
