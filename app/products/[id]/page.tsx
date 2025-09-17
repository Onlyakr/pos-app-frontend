import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { getProductsInfo } from "@/lib/products";
import { CircleArrowLeft } from "lucide-react";

import Link from "next/link";

export type CartsProps = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  barcode: string;
};

const ProductDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const { product } = await getProductsInfo(id);

  console.log(product);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="bg-muted relative flex size-full flex-col gap-6 px-5 py-10 md:items-center md:justify-center md:gap-10">
      <Button
        size="icon"
        className="bg-card text-foreground border-border hover:text-card absolute top-2 left-2 size-7 rounded-full border transition-colors"
        asChild
      >
        <Link href="/products">
          <CircleArrowLeft />
        </Link>
      </Button>

      <div className="flex items-center justify-start gap-10">
        <p className="font-semibold md:text-xl">ID : {product.id}</p>

        <p className="text-center text-xl font-bold md:text-3xl">
          {product.name}
        </p>
      </div>

      <div className="flex items-center justify-start gap-10">
        <div className="flex gap-2">
          <p className="font-semibold md:text-xl">Price : </p>
          {product.discountValue ? (
            product.discountType === "PERCENT" ? (
              <>
                <p className="bg-card rounded-md p-0.5 text-sm font-normal">
                  {product.discountValue} %
                </p>
                <p className="font-semibold line-through md:text-xl">
                  {product.price} ฿
                </p>
                <p className="font-semibold">{product.discountPrice}</p>
              </>
            ) : (
              <>
                <p className="bg-card rounded-md p-0.5 text-sm font-normal">
                  {product.discountValue} ฿
                </p>
                <p className="font-semibold line-through md:text-xl">
                  {product.price} ฿
                </p>
                <p className="font-semibold">{product.discountPrice}</p>
              </>
            )
          ) : (
            <p className="font-semibold md:text-xl">{product.price} ฿</p>
          )}
        </div>
        <p className="font-semibold md:text-xl">
          Amount :{" "}
          <span className="bg-card rounded-md px-2 py-1 font-normal md:text-base">
            {product.quantity}
          </span>
        </p>
      </div>

      <p className="font-semibold md:text-xl">
        Category :{" "}
        <span className="bg-card rounded-md px-2 py-1 font-normal md:text-base">
          {product.category}
        </span>
      </p>
      <p className="text-sm font-semibold md:text-xl">
        Author :{" "}
        <span className="bg-card rounded-md px-2 py-1 font-normal md:text-base">
          {product.author}
        </span>
      </p>

      <div className="flex flex-col gap-2">
        <h1 className="text-lg font-semibold md:text-2xl">Product Detail</h1>
        <p className="text-sm md:text-base">{product.detail}</p>
      </div>
    </div>
  );
};
export default ProductDetailsPage;
