import { CartItemProps } from "@/store/cartStore";
import { apiWrapper } from "./apiWrapper";

export const ordersCheckout = async (cart: CartItemProps[]) => {
  const res = await apiWrapper(
    `${process.env.NEXT_PUBLIC_API_URL}/order/create`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        orderLists: cart,
        total_price: cart.reduce(
          (sum, item: CartItemProps) => sum + item.price * item.quantity,
          0,
        ),
      }),
    },
  );

  if (!res.ok) throw new Error("Failed to checkout cart");

  return await res.json();
};

export const ordersGet = async (search: string, date: string) => {
  const res = await apiWrapper(
    `${process.env.NEXT_PUBLIC_API_URL}/order/get?search=${search}&date=${date}`,
    {
      method: "GET",
    },
  );

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
