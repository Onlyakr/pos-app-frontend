type Header = string;

const CartHeaders: Header[] = ["List", "Quantity", "Price", "Adjust"];

const CartHeader = () => {
  return (
    <ul className="grid min-h-13 grid-cols-7 gap-2 text-center">
      {CartHeaders.map((header, i) =>
        header === "List" ? (
          <li
            key={i}
            className="bg-muted border-border col-span-4 flex items-center justify-center rounded-lg border p-1"
          >
            {header}
          </li>
        ) : (
          <p
            key={i}
            className="bg-muted border-border flex items-center justify-center rounded-lg border p-1"
          >
            {header}
          </p>
        ),
      )}
    </ul>
  );
};
export default CartHeader;
