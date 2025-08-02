import { stocks } from "@/utils/data";
import { Button } from "../ui/button";

const StockList = () => {
  return (
    <div className="flex flex-col gap-1 overflow-auto">
      {stocks.map((stock, i) => (
        <ul
          key={i}
          className="grid min-h-12 grid-cols-5 gap-2 text-center font-medium"
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
          <Button variant="outline" className="h-full">
            Edit
          </Button>
        </ul>
      ))}
    </div>
  );
};
export default StockList;
