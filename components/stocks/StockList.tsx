"use client";

import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";
import { getProducts } from "@/lib/product";
import { StockProps } from "@/types";

import EditStockModal from "./EditStockModal";

const StockList = ({ search }: { search: string }) => {
  const [stocks, setStocks] = useState<StockProps[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        setLoading(true);
        const { products: stocks } = await getProducts(undefined, search);
        setStocks(stocks);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchStocks();
  }, [search]);

  if (loading) return <Loader2 className="w-full animate-spin" />;

  return (
    <div className="flex flex-col gap-1 overflow-auto">
      {stocks.map((stock: StockProps) => (
        <ul
          key={stock.id}
          className="grid min-h-10 grid-cols-4 gap-1 text-center font-medium"
        >
          <li className="bg-muted border-border col-span-2 flex items-center justify-center rounded-lg border p-1">
            {stock.name}
          </li>
          <li className="bg-muted border-border flex items-center justify-center rounded-lg border p-1">
            {stock.quantity}
          </li>

          <EditStockModal stock={stock} />
        </ul>
      ))}
    </div>
  );
};
export default StockList;
