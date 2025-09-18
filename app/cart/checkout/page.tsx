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

import useCart from "@/store/cartStore";
import Link from "next/link";

const CartCheckoutPage = () => {
  const { receipt } = useCart();

  return (
    <div className="flex max-h-[calc(100vh-100px)] w-full flex-col items-center justify-center gap-4 p-4 text-sm font-medium">
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

      <div className="flex gap-2">
        <Button asChild>
          <Link href="/print" replace>
            Print Receipt
          </Link>
        </Button>
        <Button variant="destructive" asChild>
          <Link href="/cart" replace>
            Cancel
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default CartCheckoutPage;
