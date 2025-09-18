"use client";

import { StockProps } from "@/types";
import { getStocksHistory } from "@/lib/stock";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

const StocksHistoryList = ({
  search,
  date,
}: {
  search: string;
  date: string;
}) => {
  const [stocks, setStocks] = useState<StockProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        setLoading(true);
        const { data: stocks } = await getStocksHistory(search, date);
        setStocks(stocks);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchStocks();
  }, [search, date]);

  if (loading) return <Loader2 className="w-full animate-spin" />;

  return (
    <div className="flex flex-col gap-1 overflow-auto">
      {stocks.map((stock: StockProps, i: number) => (
        <ul
          key={i}
          className="grid min-h-9 grid-cols-5 gap-1 text-center font-medium"
        >
          <li className="bg-muted border-border flex items-center justify-center rounded-lg border p-1">
            {stock.transactionDate}
          </li>
          <li className="bg-muted border-border col-span-2 flex items-center justify-center rounded-lg border p-1">
            {stock.product}
          </li>
          <li className="bg-muted border-border flex items-center justify-center rounded-lg border p-1">
            {stock.quantity}
          </li>
          <li
            className={`border-border flex items-center justify-center rounded-lg border ${stock.transactionType === "increase" ? "bg-green-500/60" : "bg-red-500/60"} p-1`}
          >
            {stock.transactionType === "increase" ? "Increment" : "Decrement"}
          </li>
        </ul>
      ))}
    </div>
  );
};
export default StocksHistoryList;
