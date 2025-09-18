import CartFooter from "@/components/cart/CartFooter";
import CartHeader from "@/components/cart/CartHeader";
import CartList from "@/components/cart/CartList";
import CartSummary from "@/components/cart/CartSummary";

const CartPage = () => {
  return (
    <div className="flex h-full w-full flex-col gap-2 text-sm font-medium">
      <CartHeader />
      <CartList />
      <CartSummary />
      <CartFooter />
    </div>
  );
};
export default CartPage;
