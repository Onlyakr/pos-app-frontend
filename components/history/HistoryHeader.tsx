import { historyHeaders } from "@/utils/data";

const HistoryHeader = () => {
  return (
    <ul className="grid min-h-10 grid-cols-4 gap-1 text-center font-medium">
      {historyHeaders.map((header) =>
        header === "Sales List" ? (
          <li
            key={header}
            className="bg-muted border-border col-span-2 flex items-center justify-center rounded-lg border p-1"
          >
            {header}
          </li>
        ) : (
          <li
            key={header}
            className="bg-muted border-border flex items-center justify-center rounded-lg border p-1"
          >
            {header}
          </li>
        ),
      )}
    </ul>
  );
};
export default HistoryHeader;
