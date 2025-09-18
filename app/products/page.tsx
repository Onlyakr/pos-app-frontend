import { getProducts } from "@/lib/product";
import { Suspense } from "react";
import { Loader2 } from "lucide-react";

import ProductsFilter from "@/components/products/ProductsFilter";
import ProductsHeader from "@/components/products/ProductsHeader";
import ProductsList from "@/components/products/ProductsList";
import { ProductProps } from "@/types";

const ProductsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ category: ProductProps["category"]; search: string }>;
}) => {
  const { category, search } = await searchParams;

  const { products } = await getProducts(category, search);

  return (
    <div className="flex size-full flex-col gap-3 font-medium">
      <ProductsFilter />

      <div className="flex flex-col gap-2 overflow-auto text-sm">
        <ProductsHeader />
        <Suspense
          fallback={
            <div className="flex items-center justify-center">
              <Loader2 className="animate-spin" />
            </div>
          }
        >
          <ProductsList products={products} />
        </Suspense>
      </div>
    </div>
  );
};

export default ProductsPage;
