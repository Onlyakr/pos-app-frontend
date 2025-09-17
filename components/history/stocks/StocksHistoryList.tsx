import { StockProps } from "@/utils/data";

const StocksHistoryList = async ({ stocks }: { stocks: StockProps[] }) => {
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
