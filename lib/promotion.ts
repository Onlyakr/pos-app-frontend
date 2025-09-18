import { apiWrapper } from "./apiWrapper";
import { PromotionProps } from "@/types";

export const createPromotion = async (data: PromotionProps) => {
  const res = await apiWrapper(
    `${process.env.NEXT_PUBLIC_API_URL}/promotion/create`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    },
  );

  if (!res.ok) {
    throw new Error(`Failed to create promotion: ${res.status}`);
  }

  return await res.json();
};

export const getPromotions = async (search?: string, date?: string) => {
  const res = await apiWrapper(
    `${process.env.NEXT_PUBLIC_API_URL}/promotion/get?search=${search ? search : ""}&date=${date ? date : ""}`,
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch promotions: ${res.status}`);
  }

  return await res.json();
};
