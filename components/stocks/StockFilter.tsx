import Link from "next/link";
import { Button } from "../ui/button";

const StockFilter = () => {
  return (
    <div>
      <Button asChild>
        <Link href="/stocks/add">Add Product</Link>
      </Button>

      <Button asChild>
        <Link href="/stocks/history">Stocks History</Link>
      </Button>
    </div>
  );
};
export default StockFilter;
