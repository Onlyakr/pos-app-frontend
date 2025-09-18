"use client";

import { orderDetailGet } from "@/lib/order";
import { Loader2 } from "lucide-react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { OrderProps } from "@/types";
import { orderHeaders } from "@/utils/data";

const OrderDetailPage = () => {
  const [order, setOrder] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [loading, setLoading] = useState(false);

  const { id } = useParams<{ id: string }>();

  const totalQuantity = order.reduce(
    (sum, item: OrderProps) => sum + item.quantity,
    0,
  );

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        setLoading(true);
        const { product: order, totalPrice } = await orderDetailGet(id);
        setOrder(order);
        setTotalPrice(totalPrice);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [id]);

  if (loading) return <Loader2 className="w-full animate-spin" />;

  return (
    <div className="flex size-full flex-col gap-3 text-sm font-medium">
      {/* Header */}
      <ul className="grid min-h-10 grid-cols-4 gap-1 text-center">
        {orderHeaders.map((header) =>
          header === "List" ? (
            <li
              key={header}
              className="bg-muted border-border col-span-2 flex items-center justify-center rounded-lg border p-1"
            >
              {header}
            </li>
          ) : (
            <li
              key={header}
              className="bg-muted border-border flex items-center justify-center rounded-lg border p-1"
            >
              {header}
            </li>
          ),
        )}
      </ul>

      {/* List */}
      <div className="flex flex-col gap-1 overflow-auto">
        {order.map((item: OrderProps) => (
          <ul
            className="border-border bg-muted grid min-h-10 grid-cols-4 gap-1 rounded-lg border p-1 text-center"
            key={item.id}
          >
            <li className="col-span-2 flex items-center justify-center">
              {item.name}
            </li>
            <li className="flex items-center justify-center">
              {item.quantity}
            </li>
            <li className="flex items-center justify-center">{item.price}</li>
          </ul>
        ))}
      </div>

      <ul className="grid grid-cols-4 gap-1 text-center">
        <li className="bg-muted border-border col-span-2 flex items-center justify-center rounded-lg border p-2">
          Total
        </li>
        <li className="bg-muted border-border flex items-center justify-center rounded-lg border p-2">
          {totalQuantity}
        </li>
        <li className="bg-muted border-border flex items-center justify-center rounded-lg border p-2">
          {totalPrice}
        </li>
      </ul>
    </div>
  );
};
export default OrderDetailPage;
