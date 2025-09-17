"use client";

import { Button } from "@/components/ui/button";
import { CircleCheck } from "lucide-react";
import { CircleX } from "lucide-react";
import { Input } from "../ui/input";
import { useEffect, useState, useRef } from "react";
import { getProductByBarcode } from "@/lib/products";
import { useRouter } from "next/navigation";
import { ProductProps } from "@/utils/data";
import { cartsCheckout } from "@/lib/carts";
import { toast } from "sonner";

import useCarts from "@/store/cartsStore";

const CartFooter = () => {
  const [barcode, setBarcode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const barcodeRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const { carts, addProduct } = useCarts();

  useEffect(() => {
    const focus = () => barcodeRef.current?.focus();
    focus();
    window.addEventListener("click", focus);
    return () => window.removeEventListener("click", focus);
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const barcode = formData.get("barcode") as string;
    if (barcode && barcode.trim().length > 0) {
      try {
        setIsLoading(true);
        const { product }: { product: ProductProps } =
          await getProductByBarcode(barcode);

        // Use the addProduct function which handles checking if product exists
        // and either adds new product or increases quantity
        addProduct(product);
      } catch (error) {
        console.error("Error adding product to cart:", error);
      } finally {
        setIsLoading(false);
        setBarcode("");
      }
    }
  };

  const handleConfirm = async () => {
    console.log("Cart contents:", carts);
    try {
      const res = await cartsCheckout(carts);
      console.log("Sale created:", res);
      toast.success("Sale created successfully");
    } catch (error) {
      console.error("Error creating sale:", error);
      toast.error("Error creating sale");
    }
    router.push("/carts/checkout");
  };

  return (
    <ul className="flex h-15 items-center justify-between gap-1">
      <form
        onSubmit={handleSubmit}
        className="bg-muted border-border flex items-center justify-center rounded-md border text-center"
      >
        <Input
          type="text"
          placeholder="Barcode ID"
          name="barcode"
          onChange={(e) => setBarcode(e.target.value)}
          value={barcode}
          ref={barcodeRef}
        />
      </form>

      <li className="flex items-center justify-center gap-2">
        <Button onClick={handleConfirm}>
          <CircleCheck />
          Confirm
        </Button>
        <Button variant="destructive" onClick={() => router.push("/sales")}>
          <CircleX />
          Cancel
        </Button>
      </li>
    </ul>
  );
};
export default CartFooter;
