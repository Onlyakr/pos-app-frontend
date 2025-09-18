import { Button } from "../ui/button";
import Link from "next/link";

const SalesHistory = () => {
  return (
    <Button variant="outline" asChild>
      <Link href="/sales/history">Sales History</Link>
    </Button>
  );
};
export default SalesHistory;
