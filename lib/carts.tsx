import { CartItem } from "@/store/cartsStore";
import { apiWrapper } from "./apiWrapper";

export const cartsCheckout = async (carts: CartItem[]) => {
  const res = await apiWrapper(
    `${process.env.NEXT_PUBLIC_API_URL}/order/create`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        orderLists: [
          {
            id: 316,
            price: 234.35,
            quantity: 3,
          },
          {
            id: 108,
            price: 5000,
            quantity: 1,
          },
          {
            id: 1240,
            price: 234.35,
            quantity: 2,
          },
        ],
        total_price: 3278.5,
      }),
    },
  );
  if (!res.ok) throw new Error("Failed to checkout carts");
  return await res.json();
};

export const ordersGet = async () => {
  const res = await apiWrapper(`${process.env.NEXT_PUBLIC_API_URL}/order/get`, {
    method: "GET",
  });
  if (!res.ok) throw new Error("Failed to get orders");
  return await res.json();
};

export const orderDetailGet = async (id: string) => {
  const res = await apiWrapper(
    `${process.env.NEXT_PUBLIC_API_URL}/order/get/${id}`,
    {
      method: "GET",
    },
  );
  if (!res.ok) throw new Error("Failed to get order detail");
  return await res.json();
};
