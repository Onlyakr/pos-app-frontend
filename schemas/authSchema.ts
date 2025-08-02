import z from "zod";

export const loginFormSchema = z.object({
  username: z
    .string()
    .min(4, { error: "Username must be at least 4 characters" })
    .max(50, { error: "Username must be less than 50 characters" }),
  password: z
    .string()
    .min(8, { error: "Password must be at least 8 characters" }),
});
