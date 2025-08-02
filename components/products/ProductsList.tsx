import { Product, products } from "@/utils/data";
import Link from "next/link";

const ProductsList = () => {
  return (
    <div className="flex flex-col gap-1 overflow-auto">
      {products.map((product: Product) => (
        <Link key={product.id} href={`/products/${product.id}`}>
          <ul className="grid min-h-12 grid-cols-7 gap-2 text-center font-medium">
            <li className="bg-muted border-border flex items-center justify-center rounded-lg border p-1">
              {product.id}
            </li>
            <li className="bg-muted border-border flex items-center justify-center rounded-lg border p-1">
              {product.category}
            </li>
            <li className="bg-muted border-border col-span-3 flex items-center justify-center rounded-lg border p-1">
              {product.name}
            </li>
            <li className="bg-muted border-border flex items-center justify-center rounded-lg border p-1">
              {product.quantity}
            </li>
            <li className="bg-muted border-border flex items-center justify-center rounded-lg border p-1">
              {product.price}
            </li>
          </ul>
        </Link>
      ))}
    </div>
  );
};
export default ProductsList;
