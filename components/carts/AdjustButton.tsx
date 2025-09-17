import { Button } from "../ui/button";
import { Minus, Plus } from "lucide-react";
import useCarts from "@/store/cartsStore";

interface AdjustButtonProps {
  productId: string;
  currentQuantity: number;
}

const AdjustButton = ({ productId, currentQuantity }: AdjustButtonProps) => {
  const { updateQuantity } = useCarts();

  const handleAdd = () => {
    updateQuantity(productId, currentQuantity + 1);
  };

  const handleRemove = () => {
    updateQuantity(productId, currentQuantity - 1);
  };

  return (
    <>
      <Button variant="destructive" className="size-7" onClick={handleRemove}>
        <Minus size={15} />
      </Button>
      <Button variant="destructive" className="size-7" onClick={handleAdd}>
        <Plus size={15} />
      </Button>
    </>
  );
};
export default AdjustButton;
