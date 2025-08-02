import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { CircleArrowLeft } from "lucide-react";
import Link from "next/link";

const ProductDetailsPage = async ({
  params,
}: {
  params: Promise<{ productID: string }>;
}) => {
  const { productID } = await params;
  return (
    <div className="bg-muted relative flex size-full flex-col items-center justify-center gap-5">
      <Button
        size="icon"
        className="bg-card text-foreground border-border hover:text-card absolute top-2 left-2 size-7 rounded-full border transition-colors"
        asChild
      >
        <Link href="/products">
          <CircleArrowLeft />
        </Link>
      </Button>
      <h1 className="w-10/12 text-start text-xl font-bold uppercase">
        {productID}
      </h1>
      <Skeleton className="flex size-10/12 items-center justify-between p-5" />
    </div>
  );
};
export default ProductDetailsPage;
