import { StockProps } from "@/utils/data";

import EditStock from "./EditStock";

const StockList = async ({ stocks }: { stocks: StockProps[] }) => {
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

          <EditStock stock={stock} />
        </ul>
      ))}
    </div>
  );
};
export default StockList;
