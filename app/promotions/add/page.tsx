import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CircleCheck, CircleX, X } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

const AddPromotionPage = () => {
  return (
    <div className="container mx-auto flex h-full flex-col items-center justify-center gap-5 p-5">
      {/* <h1 className="self-start">Add Promotion</h1> */}
      <form className="flex flex-col gap-5">
        <div className="flex gap-10">
          <div className="flex w-1/2 flex-col gap-2">
            <Label htmlFor="startdate">Start Date</Label>
            <Input placeholder="Start Date" name="startdate" />
          </div>

          <div className="flex w-1/2 flex-col gap-2">
            <Label htmlFor="enddate">End Date</Label>
            <Input placeholder="End Date" name="enddate" />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Name</Label>
          <Input placeholder="Name" name="name" />
        </div>

        <div className="flex gap-10">
          <div className="flex w-1/2 flex-col gap-2">
            <Label htmlFor="discount">Discount</Label>
            <Input placeholder="Discount" name="discount" />
          </div>

          <div className="flex w-1/2 flex-col gap-2">
            <Label htmlFor="amount">Amount</Label>
            <Input placeholder="Amount" name="amount" />
          </div>
        </div>

        <div className="flex justify-center gap-10">
          <Button className="border-border bg-muted text-foreground flex-1 border hover:bg-green-500/90">
            <CircleCheck />
            Confirm
          </Button>

          <Button className="border-border bg-muted text-foreground flex-1 border hover:bg-red-500">
            <Link href="/promotions" className="flex items-center gap-2">
              <CircleX />
              Cancel
            </Link>
          </Button>
        </div>
      </form>
    </div>
  );
};
export default AddPromotionPage;
