import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

import GoBackButton from "@/components/GoBackButton";

import Link from "next/link";

const SalesPage = () => {
  return (
    <div className="relative flex size-full flex-col items-center justify-center gap-5">
      <GoBackButton className="absolute top-2 left-2" />

      <ShoppingBag size={150} />
      <Button className="w-42" asChild>
        <Link href="/cart">Make Sale</Link>
      </Button>
    </div>
  );
};
export default SalesPage;
