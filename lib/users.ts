import { loginFormSchema } from "@/schemas/authSchema";
import { z } from "zod";

export const loginUser = async (values: z.infer<typeof loginFormSchema>) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/users/login`,
    {
      method: "POST",
      body: JSON.stringify(values),
    },
  );
  const data = await res.json();
  return data;
};

export const logOutUser = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/users/logout`,
    {
      method: "POST",
    },
  );
  const data = await res.json();
  return data;
};
