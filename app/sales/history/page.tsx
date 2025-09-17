"use client";

import { ordersGet } from "@/lib/carts";
import { useState, useEffect } from "react";

import HistoryFilter from "@/components/history/HistoryFilter";
import HistoryHeader from "@/components/history/HistoryHeader";
import HistoryList from "@/components/history/HistoryList";

const PromotionsPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const { orderResult: orders } = await ordersGet();
      setOrders(orders);
    };
    fetchOrders();
  }, []);

  console.log(orders);
  return (
    <div className="flex size-full flex-col gap-3 font-medium">
      <HistoryFilter />

      <div className="flex flex-col gap-2 overflow-auto text-sm">
        <HistoryHeader />
        <HistoryList orders={orders} />
      </div>
    </div>
  );
};
export default PromotionsPage;
