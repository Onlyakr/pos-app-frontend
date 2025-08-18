import { promotionHeaders } from "@/utils/data";

const PromotionHeader = () => {
  return (
    <ul className="grid min-h-11 grid-cols-7 gap-1 text-center font-medium">
      {promotionHeaders.map((header, i) =>
        header === "Name" ? (
          <li
            key={i}
            className="bg-muted border-border col-span-3 flex items-center justify-center rounded-lg border p-1"
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
export default PromotionHeader;
