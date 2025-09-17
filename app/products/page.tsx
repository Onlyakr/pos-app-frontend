import { ProductProps } from "@/utils/data";
import { getProducts } from "@/lib/products";
import { Suspense } from "react";
import { Loader2 } from "lucide-react";

import ProductsFilter from "@/components/products/ProductsFilter";
import ProductsHeader from "@/components/products/ProductsHeader";
import ProductsList from "@/components/products/ProductsList";

const ProductsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ category: ProductProps["category"]; search: string }>;
}) => {
  const { category, search } = await searchParams;

  // if (barcode) {
  //   console.log(barcode);
  //   const products = await getProductByBarcode(barcode);
  //   return (
  //     <div className="flex size-full flex-col gap-3 font-medium">
  //       <ProductsFilter />

  //       <div className="flex flex-col gap-2 overflow-auto text-sm">
  //         <ProductsHeader />
  //         <Suspense fallback={<div>Loading...</div>}>
  //           {/* <ProductsList products={products} /> */}
  //         </Suspense>
  //       </div>
  //     </div>
  //   );
  // }

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

      {/* <PaginationComponent /> */}
    </div>
  );
};

export default ProductsPage;
