import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";

const SalesPage = () => {
  return (
    <div className="flex size-full flex-col items-center justify-center gap-5">
      <ShoppingBag size={150} />
      <Link href="/sales/cart">
        <Button className="w-42">Make Sale</Button>
      </Link>
    </div>
  );
};
export default SalesPage;
