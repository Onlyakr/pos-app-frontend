import Link from "next/link";

import { Button } from "../ui/button";

const AddPromotionButton = () => {
  return (
    <Button variant="outline" asChild>
      <Link href="/promotions/add">Add Promotion</Link>
    </Button>
  );
};
export default AddPromotionButton;
