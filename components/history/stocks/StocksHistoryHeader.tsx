const stocksHistoryHeaders = ["Date", "Name", "Quantity", "Type"];

const StocksHistoryHeader = () => {
  return (
    <ul className="grid min-h-11 grid-cols-5 gap-1 text-center font-medium">
      {stocksHistoryHeaders.map((header, i) =>
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
export default StocksHistoryHeader;
