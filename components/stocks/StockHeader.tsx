import { stockHeaders } from "@/utils/data";

const StockHeader = () => {
  return (
    <ul className="grid min-h-11 grid-cols-4 gap-1 text-center font-medium">
      {stockHeaders.map((header, i) =>
        header === "Name" ? (
          <li
            key={i}
            className="bg-muted border-border col-span-2 flex items-center justify-center rounded-lg border p-1"
          >
            {header}
          </li>
        ) : (
          <li
            key={i}
            className="bg-muted border-border flex items-center justify-center rounded-lg border p-1"
          >
            {header}
          </li>
        ),
      )}
    </ul>
  );
};
export default StockHeader;
