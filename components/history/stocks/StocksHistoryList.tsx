import { stocks } from "@/utils/data";

const StocksHistoryList = () => {
  return (
    <div className="flex flex-col gap-1 overflow-auto">
      {stocks.map((stock) => (
        <ul
          key={stock.date}
          className="grid min-h-9 grid-cols-5 gap-1 text-center font-medium"
        >
          <li className="bg-muted border-border flex items-center justify-center rounded-lg border p-1">
            {stock.date}
          </li>
          <li className="bg-muted border-border col-span-2 flex items-center justify-center rounded-lg border p-1">
            {stock.name}
          </li>
          <li className="bg-muted border-border flex items-center justify-center rounded-lg border p-1">
            {stock.amount}
          </li>
          <li className="border-border flex items-center justify-center rounded-lg border bg-green-500/60 p-1">
            Increment
          </li>
        </ul>
      ))}
    </div>
  );
};
export default StocksHistoryList;
