import CartFooter from "@/components/carts/CartFooter";
import CartHeader from "@/components/carts/CartHeader";
import CartList from "@/components/carts/CartList";
import CartSummary from "@/components/carts/CartSummary";
import Test from "@/components/carts/Test";

const Page = () => {
  return (
    <div className="flex h-full w-full flex-col gap-2 text-sm font-medium">
      {/* <CartHeader />
      <CartList />
      <CartSummary />
      <CartFooter /> */}
      <Test />
    </div>
  );
};
export default Page;
