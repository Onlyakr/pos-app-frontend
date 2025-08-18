import { carts, CartProps } from "@/utils/data";
import AdjustButton from "./AdjustButton";

const CartList = () => {
  return (
    <div className="flex flex-col gap-1 overflow-auto">
      {carts.map((cart: CartProps) => (
        <ul
          className="border-border bg-muted grid min-h-10 grid-cols-7 gap-1 rounded-lg border p-1 text-center"
          key={cart.list}
        >
          <li className="col-span-4 flex items-center justify-center">
            {cart.list}
          </li>
          <li className="flex items-center justify-center">{cart.quantity}</li>
          <li className="flex items-center justify-center">{cart.price}</li>
          <li className="flex items-center justify-center gap-2">
            <AdjustButton />
          </li>
        </ul>
      ))}
    </div>
  );
};
export default CartList;
