"use client";

import useCart, { CartItemProps } from "@/store/cartStore";

const CartSummary = () => {
  const { cart } = useCart();

  const totalQuantity = cart.reduce(
    (sum, item: CartItemProps) => sum + item.quantity,
    0,
  );
  const totalPrice = cart.reduce(
    (sum, item: CartItemProps) => sum + item.price * item.quantity,
    0,
  );

  return (
    <ul className="grid grid-cols-7 gap-1 text-center font-medium">
      <li className="bg-muted border-border col-span-4 flex items-center justify-center rounded-lg border p-2">
        Total
      </li>
      <li className="bg-muted border-border col-span-1 flex items-center justify-center rounded-lg border p-2">
        {totalQuantity}
      </li>
      <li className="bg-muted border-border col-span-1 flex items-center justify-center rounded-lg border p-2">
        {totalPrice.toFixed(2)}
      </li>
    </ul>
  );
};
export default CartSummary;
