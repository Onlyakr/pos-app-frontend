"use client";

import { Button } from "@/components/ui/button";
import { CircleCheck, CircleX, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useEffect, useRef, useState } from "react";
import { getProductByBarcode } from "@/lib/product";
import { useRouter } from "next/navigation";
import { ordersCheckout } from "@/lib/order";
import { toast } from "sonner";

import useCart from "@/store/cartStore";

const CartFooter = () => {
  const [barcode, setBarcode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const barcodeRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const { cart, addProduct, clearCart, setReceipt } = useCart();

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
        const { product } = await getProductByBarcode(barcode);
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
    if (cart.length === 0) {
      toast.error("Please add products to the cart");
      return;
    }
    try {
      const res = await ordersCheckout(cart);
      setReceipt({ cart, id: res.id });
      toast.success("Sale created successfully");
    } catch (error) {
      console.error("Error creating sale:", error);
      toast.error("Error creating sale");
    } finally {
      setIsLoading(false);
      setBarcode("");
      clearCart();
      router.push("/cart/checkout");
    }
  };

  const handleCancel = () => {
    clearCart();
    router.replace("/sales");
  };

  return (
    <ul className="flex h-15 items-center justify-between gap-1">
      <form
        onSubmit={handleSubmit}
        className="bg-muted border-border flex w-1/3 items-center justify-center rounded-md border text-center"
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

      <li className="flex w-2/3 items-center justify-end gap-2">
        <Button onClick={handleConfirm} disabled={isLoading} className="w-1/3">
          {isLoading ? <Loader2 className="animate-spin" /> : <CircleCheck />}
          {isLoading ? "Confirming..." : "Confirm"}
        </Button>

        <Button
          variant="destructive"
          onClick={handleCancel}
          disabled={isLoading}
          className="w-1/3"
        >
          {isLoading ? <Loader2 className="animate-spin" /> : <CircleX />}
          {isLoading ? "Cancelling..." : "Cancel"}
        </Button>
      </li>
    </ul>
  );
};
export default CartFooter;
