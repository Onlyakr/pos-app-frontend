"use client";

import { orderDetailGet } from "@/lib/carts";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const OrderDetailPage = () => {
  const [order, setOrder] = useState<any>(null);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchOrder = async () => {
      const { product: order } = await orderDetailGet(id!);
      console.log(order);
      setOrder(order);
    };
    fetchOrder();
  }, [id]);

  if (!order) return <div>Loading...</div>;

  return (
    <div>
      {order.map((item: any) => (
        <div key={item.id}>
          <div>{item.name}</div>
          <div>{item.quantity}</div>
          <div>{item.price}</div>
        </div>
      ))}
    </div>
  );
};
export default OrderDetailPage;
