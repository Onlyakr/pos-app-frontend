"use client";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { useRouter } from "next/navigation";
import { Separator } from "@/components/ui/separator";

import Link from "next/link";

import useCart from "@/store/cartStore";

const CartCheckoutPage = () => {
  const receiptRef = useRef<HTMLTableElement>(null);
  const { receipt } = useCart();

  console.log(receipt);
  const router = useRouter();

  const handlePrint = useReactToPrint({
    contentRef: receiptRef,
    onAfterPrint: () => router.push("/sales"),
  });

  return (
    <div className="flex h-full max-h-[calc(100vh-100px)] w-full flex-col items-center justify-center gap-4 p-4 text-sm font-medium">
      <div ref={receiptRef} className="flex flex-col gap-4">
        <h1 className="w-full text-center text-2xl font-bold">
          Moonlight Books
        </h1>
        <div className="flex w-full justify-between gap-2">
          <h2 className="text-base font-medium">Receipt No: {receipt.id}</h2>
          <h2 className="text-base font-medium">
            Date: {new Date().toLocaleDateString()}
          </h2>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead className="text-center">Quantity</TableHead>
              <TableHead className="text-right">Price</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="overflow-y-scroll">
            {receipt.cart.map((cart) => (
              <TableRow key={cart.id}>
                <TableCell>{cart.name}</TableCell>
                <TableCell className="pl-9">{cart.quantity}</TableCell>
                <TableCell className="text-right">{cart.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={2} className="text-right">
                Total
              </TableCell>
              <TableCell className="text-right">
                {receipt.cart
                  .reduce((acc, cart) => acc + cart.price * cart.quantity, 0)
                  .toFixed(2)}{" "}
                ฿
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>

      <div className="flex gap-4">
        <Button onClick={handlePrint}>Print Receipt</Button>
        <Button variant="destructive" asChild>
          <Link href="/sales" replace>
            Cancel
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default CartCheckoutPage;
