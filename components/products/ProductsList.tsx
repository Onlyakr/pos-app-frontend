"use client";

import { getProducts } from "@/lib/product";
import { ProductProps } from "@/types";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

import Link from "next/link";

const ProductsList = ({
  search,
  category,
}: {
  search: string;
  category: ProductProps["category"];
}) => {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const { products } = await getProducts(category, search);
        setProducts(products);
      } catch (error) {
        console.error(error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [category, search]);

  if (loading) return <Loader2 className="w-full animate-spin" />;

  return (
    <div className="flex flex-col gap-1 overflow-auto">
      {products.map((product: ProductProps) => (
        <Link key={product.id} href={`/products/${product.id}`}>
          <ul className="grid min-h-10 grid-cols-7 gap-1 text-center font-medium">
            <li className="bg-muted border-border flex items-center justify-center rounded-lg border p-1">
              {product.id}
            </li>
            <li className="bg-muted border-border flex items-center justify-center rounded-lg border p-1">
              {product.category === "Self-development"
                ? "Self-Dev"
                : product.category}
            </li>
            <li className="bg-muted border-border col-span-3 flex items-center justify-center rounded-lg border p-1">
              {product.name}
            </li>
            <li className="bg-muted border-border flex items-center justify-center rounded-lg border p-1">
              {product.quantity}
            </li>
            <li className="bg-muted border-border flex items-center justify-center rounded-lg border p-1">
              {product.price}฿
            </li>
          </ul>
        </Link>
      ))}
    </div>
  );
};
export default ProductsList;
