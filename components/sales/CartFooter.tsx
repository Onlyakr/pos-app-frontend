"use client";

import { Button } from "@/components/ui/button";
import { CircleCheck } from "lucide-react";
import { CircleX } from "lucide-react";
import { redirect } from "next/navigation";
import { Input } from "../ui/input";

const CartFooter = () => {
  return (
    <ul className="grid h-15 grid-cols-8 items-center justify-center gap-2">
      <li className="bg-muted border-border col-span-2 flex items-center justify-center rounded-md border text-center">
        <Input type="text" placeholder="Barcode ID" />
      </li>
      <li className="col-span-2 mr-auto">
        <Button
          className="border-border bg-muted text-foreground border hover:bg-green-600"
          onClick={() => redirect("cart/checkout")}
        >
          <CircleCheck />
          Confirm
        </Button>
      </li>
      <li className="col-span-2 ml-auto">
        <Button
          className="border-border bg-muted text-foreground hover:bg-destructive border"
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
