import { cartHeaders } from "@/utils/data";

const CartHeader = () => {
  return (
    <ul className="grid min-h-13 grid-cols-7 gap-2 text-center">
      {cartHeaders.map((header, i) =>
        header === "List" ? (
          <li
            key={i}
            className="bg-muted border-border col-span-4 flex items-center justify-center rounded-lg border p-1"
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
export default CartHeader;
