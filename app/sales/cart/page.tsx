import CartFooter from "@/components/sales/CartFooter";
import CartHeader from "@/components/sales/CartHeader";
import CartList from "@/components/sales/CartList";
import CartSummary from "@/components/sales/CartSummary";

const Page = () => {
  return (
    <div className="flex h-full w-full flex-col gap-2 text-sm font-medium">
      <CartHeader />
      <CartList />
      <CartSummary />
      <CartFooter />
    </div>
  );
};
export default Page;
