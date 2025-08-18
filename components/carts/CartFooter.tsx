"use client";

import { Button } from "@/components/ui/button";
import { CircleCheck } from "lucide-react";
import { CircleX } from "lucide-react";
import { redirect } from "next/navigation";
import { Input } from "../ui/input";
import { useEffect, useState } from "react";

const CartFooter = () => {
  const [barcode, setBarcode] = useState("");

  useEffect(() => {
    console.log(barcode);

    const handleFetch = async () => {
      if (barcode.trim().length > 0) {
        try {
          const response = await fetch(`/api/products/${barcode}`);
          const data = await response.json();
          console.log(data);
        } catch (error) {
          console.error(error);
        }
      }
    };

    handleFetch();
  }, [barcode]);

  return (
    <ul className="grid h-15 grid-cols-8 items-center justify-center gap-1">
      <li className="bg-muted border-border col-span-2 flex items-center justify-center rounded-md border text-center">
        <Input
          type="text"
          placeholder="Barcode ID"
          onChange={(e) => setBarcode(e.target.value)}
          value={barcode}
        />
      </li>
      <li className="col-span-2 mr-auto">
        <Button
          className="border-border bg-muted text-foreground border hover:bg-green-500/90"
          onClick={() => redirect("/carts/checkout")}
        >
          <CircleCheck />
          Confirm
        </Button>
      </li>
      <li className="col-span-2 ml-auto">
        <Button
          className="border-border bg-muted text-foreground border hover:bg-red-500"
          onClick={() => redirect("/sales")}
        >
          <CircleX />
          Cancel
        </Button>
      </li>
      <li className="border-border bg-muted col-span-2 flex items-center justify-center rounded-md border p-2 text-center">
        A1234567
      </li>
    </ul>
  );
};
export default CartFooter;
