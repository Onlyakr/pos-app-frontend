import { Button } from "../ui/button";
import { Minus, Plus } from "lucide-react";

const AdjustButton = () => {
  //   const [products, setProducts] = useState<Product[]>(productsData);

  //   const handleAdd = (productID: string) => {
  //     setProducts((crrProducts: Product[]) =>
  //       crrProducts.map((product: Product) =>
  //         product.id === productID
  //           ? { ...product, quantity: product.quantity + 1 }
  //           : product,
  //       ),
  //     );
  //   };
  //   const handleRemove = (productID: string) => {
  //     setProducts((crrProducts: Product[]) =>
  //       crrProducts.map((product: Product) =>
  //         product.id === productID
  //           ? { ...product, quantity: product.quantity - 1 }
  //           : product,
  //       ),
  //     );
  //   };
  return (
    <>
      <Button
        variant="destructive"
        className="size-7"
        // onClick={() => handleRemove(product.id)}
      >
        <Minus size={15} />
      </Button>
      <Button
        variant="destructive"
        className="size-7"
        // onClick={() => handleAdd(product.id)}
      >
        <Plus size={15} />
      </Button>
    </>
  );
};
export default AdjustButton;
