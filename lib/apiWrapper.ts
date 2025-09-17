import { redirect } from "next/navigation";
import { getAccessToken } from "./users";

export const apiWrapper = async (input: RequestInfo, init?: RequestInit) => {
  let res = await fetch(input, {
    ...init,
    credentials: "include",
  });

  if (res.status === 401) {
    try {
      await getAccessToken();
      res = await fetch(input, {
        ...init,
        credentials: "include",
      });
      return res;
    } catch (error) {
      const e = error as Error;
      console.error(e.message);
      redirect("/login");
    }
  }

  return res;
};
