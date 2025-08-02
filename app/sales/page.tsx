import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";

const SalesPage = () => {
  return (
    <div className="flex size-full flex-col items-center justify-center gap-5">
      <ShoppingBag size={150} />
      <Button className="w-42" asChild>
        <Link href="/sales/carts">Make Sale</Link>
      </Button>
    </div>
  );
};
export default SalesPage;
