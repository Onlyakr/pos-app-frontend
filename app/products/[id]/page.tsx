"use client";

import { getProductsInfo } from "@/lib/product";
import { ProductInfoProps } from "@/types";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Loader2 } from "lucide-react";

import GoBackButton from "@/components/GoBackButton";

const ProductDetailsPage = () => {
  const { id } = useParams<{ id: string }>();

  const [product, setProduct] = useState<ProductInfoProps | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const { product } = await getProductsInfo(id);
        setProduct(product);
      } catch (error) {
        console.error(error);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <Loader2 className="w-full animate-spin" />;

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="bg-muted relative flex size-full flex-col gap-4 px-5 py-10 lg:items-center lg:justify-center lg:gap-10">
      <GoBackButton className="absolute top-2 left-2" />

      <div className="flex items-center justify-start gap-10">
        <p className="font-semibold lg:text-xl">ID : {product.id}</p>

        <p className="text-center text-xl font-bold lg:text-3xl">
          {product.name}
        </p>
      </div>

      <div className="flex items-center justify-start gap-10">
        <div className="flex gap-2">
          <p className="font-semibold lg:text-xl">Price : </p>
          {product.discountValue ? (
            product.discountType === "PERCENT" ? (
              <>
                <p className="bg-card rounded-md p-0.5 text-sm font-normal">
                  {product.discountValue} %
                </p>
                <p className="font-semibold line-through lg:text-xl">
                  {product.price} ฿
                </p>
                <p className="font-semibold">{product.discountPrice}</p>
              </>
            ) : (
              <>
                <p className="bg-card rounded-md p-0.5 text-sm font-normal">
                  {product.discountValue} ฿
                </p>
                <p className="font-semibold line-through lg:text-xl">
                  {product.price} ฿
                </p>
                <p className="font-semibold">{product.discountPrice}</p>
              </>
            )
          ) : (
            <p className="font-semibold lg:text-xl">{product.price} ฿</p>
          )}
        </div>
        <p className="font-semibold lg:text-xl">
          Amount :{" "}
          <span className="bg-card rounded-md px-2 py-1 font-normal md:text-base">
            {product.quantity}
          </span>
        </p>
      </div>

      <p className="font-semibold lg:text-xl">
        Category :{" "}
        <span className="bg-card rounded-md px-2 py-1 font-normal md:text-base">
          {product.category}
        </span>
      </p>
      <p className="text-sm font-semibold lg:text-xl">
        Author :{" "}
        <span className="bg-card rounded-md px-2 py-1 font-normal md:text-base">
          {product.author}
        </span>
      </p>

      <div className="flex flex-col gap-2">
        <h1 className="text-lg font-semibold lg:text-2xl">Product Detail</h1>
        <p className="text-sm md:text-base">{product.detail}</p>
      </div>
    </div>
  );
};
export default ProductDetailsPage;
