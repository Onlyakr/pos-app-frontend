"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ordersGet } from "@/lib/order";
import { Loader2 } from "lucide-react";
import { OrderHistoryProps } from "@/types";

import Link from "next/link";

const HistoryList = () => {
  const [orders, setOrders] = useState<OrderHistoryProps[]>([]);
  const [loading, setLoading] = useState(false);

  const searchParams = useSearchParams();
  const search = searchParams.get("search") || "";
  const date = searchParams.get("date") || "";

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);
        const { orderResult: orders } = await ordersGet(search, date);
        setOrders(orders);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, [search, date]);

  if (loading) {
    return <Loader2 className="w-full animate-spin" />;
  }

  return (
    <div className="flex flex-col gap-1 overflow-auto">
      {orders.map((order: OrderHistoryProps) => (
        <Link href={`/sales/history/${order.id}`} key={order.id}>
          <ul className="grid min-h-10 grid-cols-4 gap-1 text-center font-medium">
            <li className="bg-muted border-border flex items-center justify-center rounded-lg border p-1">
              {order.date}
            </li>
            <li className="bg-muted border-border flex items-center justify-center rounded-lg border p-1">
              {order.receiptId}
            </li>
            <li className="bg-muted border-border col-span-2 flex items-center justify-center rounded-lg border p-1">
              Order
              {order.id}
            </li>
          </ul>
        </Link>
      ))}
    </div>
  );
};
export default HistoryList;
