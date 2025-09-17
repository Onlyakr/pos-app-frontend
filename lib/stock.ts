import { apiWrapper } from "./apiWrapper";

export const updateStock = async (data: {
  product: string;
  quantity: number;
  transactionType: "increase" | "decrease";
}) => {
  console.log(data);
  const res = await apiWrapper(
    `${process.env.NEXT_PUBLIC_API_URL}/stock/create`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    },
  );

  if (!res.ok) {
    throw new Error(`Failed to update stock: ${res.status}`);
  }

  return await res.json();
};

export const getStocksHistory = async (search?: string, date?: string) => {
  const res = await apiWrapper(
    `${process.env.NEXT_PUBLIC_API_URL}/stock/get?search=${search ? search : ""}&date=${date ? date : ""}`,
  );

  if (!res.ok) {
    throw new Error(`Fail to get stock history: ${res.status}`);
  }
  return await res.json();
};
