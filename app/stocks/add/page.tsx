import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CircleCheck, CircleX } from "lucide-react";
import { Label } from "@/components/ui/label";

const AddStockPage = () => {
  return (
    <div className="container mx-auto flex h-full flex-col items-center justify-center gap-5 p-5">
      <form className="flex w-full flex-col gap-5">
        <div className="flex gap-5">
          <div className="flex w-1/2 flex-col gap-2">
            <Label htmlFor="id">ID (Bar Code)</Label>
            <Input name="id" type="text" />
          </div>

          <div className="flex w-1/2 flex-col gap-2">
            <Label htmlFor="name">Name</Label>
            <Input name="name" type="text" />
          </div>
        </div>

        <div className="flex gap-5">
          <div className="flex w-1/2 flex-col gap-2">
            <Label htmlFor="author">Author</Label>
            <Input name="author" type="text" />
          </div>

          <div className="flex w-1/2 flex-col gap-2">
            <Label htmlFor="amount">Amount</Label>
            <Input name="amount" type="text" />
          </div>
        </div>

        <div className="flex gap-5">
          <div className="flex w-1/2 flex-col gap-2">
            <Label htmlFor="price">Price</Label>
            <Input name="price" type="text" />
          </div>

          <div className="flex w-1/2 flex-col gap-2">
            <Label htmlFor="detail">Detail</Label>
            <Input name="detail" type="text" />
          </div>
        </div>

        <div className="flex justify-center gap-5">
          <Button
            className="border-border bg-muted text-foreground flex-1 border hover:bg-green-500/90"
            type="submit"
          >
            <CircleCheck />
            Confirm
          </Button>

          <Button className="border-border bg-muted text-foreground flex-1 border hover:bg-red-500">
            <Link href="/stocks" className="flex items-center gap-2">
              <CircleX />
              Cancel
            </Link>
          </Button>
        </div>
      </form>
    </div>
  );
};
export default AddStockPage;
