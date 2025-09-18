"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect } from "react";

import useCart from "@/store/cartStore";

const PrintPage = () => {
  const { receipt } = useCart();

  useEffect(() => {
    const print = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      window.print();
    };
    print();
  }, []);

  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 p-32">
      <h1 className="text-2xl font-bold">Receipt</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead className="text-center">Quantity</TableHead>
            <TableHead className="text-right">Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
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
  );
};
export default PrintPage;
