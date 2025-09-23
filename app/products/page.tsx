import { ProductProps } from "@/types";

import ProductsFilter from "@/components/products/ProductsFilter";
import ProductsHeader from "@/components/products/ProductsHeader";
import ProductsList from "@/components/products/ProductsList";

const ProductsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ category: ProductProps["category"]; search: string }>;
}) => {
  const { category, search } = await searchParams;

  return (
    <div className="flex size-full flex-col gap-3 font-medium">
      <ProductsFilter />

      <div className="flex flex-col gap-2 overflow-auto text-sm">
        <ProductsHeader />
        <ProductsList search={search} category={category} />
      </div>
    </div>
  );
};

export default ProductsPage;
