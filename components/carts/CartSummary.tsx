import useCarts from "@/store/cartsStore";

const CartSummary = () => {
  const { carts } = useCarts();

  // Calculate total quantity and total price
  const totalQuantity = carts.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = carts.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <ul className="grid grid-cols-7 gap-1 text-center">
      <li className="bg-muted border-border col-span-4 flex items-center justify-center rounded-lg border p-2 font-bold">
        Total
      </li>
      <li className="bg-muted border-border col-span-1 flex items-center justify-center rounded-lg border p-2 font-bold">
        {totalQuantity}
      </li>
      <li className="bg-muted border-border col-span-1 flex items-center justify-center rounded-lg border p-2 font-bold">
        {totalPrice.toFixed(2)}
      </li>
    </ul>
  );
};
export default CartSummary;
