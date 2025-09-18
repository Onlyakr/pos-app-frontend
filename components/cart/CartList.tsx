"use client";

import useCart, { CartItemProps } from "@/store/cartStore";

import AdjustButton from "./AdjustButton";

const CartList = () => {
  const { cart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="flex flex-1 gap-1 overflow-auto">
        <div className="border-border bg-muted grid min-h-10 flex-1 place-items-center gap-1 rounded-lg border p-1 text-center">
          <p className="text-center">No products in cart</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-1 overflow-auto">
      {cart.map((product: CartItemProps) => (
        <ul
          className="border-border bg-muted grid min-h-10 grid-cols-7 gap-1 rounded-lg border p-1 text-center"
          key={product.id}
        >
          <li className="col-span-4 flex items-center justify-center">
            {product.name}
          </li>
          <li className="flex items-center justify-center">
            {product.quantity}
          </li>
          <li className="flex items-center justify-center">{product.price}</li>
          <li className="flex items-center justify-center gap-2">
            <AdjustButton
              productId={product.id!}
              currentQuantity={product.quantity}
            />
          </li>
        </ul>
      ))}
    </div>
  );
};
export default CartList;
