"use client";

import CartFooter from "@/components/carts/CartFooter";
import CartHeader from "@/components/carts/CartHeader";
import CartList from "@/components/carts/CartList";
import CartSummary from "@/components/carts/CartSummary";
import useCarts from "@/store/cartsStore";

const Page = () => {
  const { carts } = useCarts();

  return (
    <div className="flex h-full w-full flex-col gap-2 text-sm font-medium">
      <CartHeader />
      <CartList products={carts} />
      <CartSummary />
      <CartFooter />
    </div>
  );
};
export default Page;
