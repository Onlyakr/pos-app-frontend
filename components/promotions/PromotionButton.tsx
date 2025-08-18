import { Button } from "../ui/button";
import Link from "next/link";

const PromotionButton = () => {
  return (
    <Button variant="outline" asChild>
      <Link href="/promotions">Promotions</Link>
    </Button>
  );
};
export default PromotionButton;
