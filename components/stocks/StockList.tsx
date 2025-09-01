import { stocks } from "@/utils/data";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { MinusIcon, PlusIcon, Trash2Icon } from "lucide-react";

const StockList = () => {
  return (
    <div className="flex flex-col gap-1 overflow-auto">
      {stocks.map((stock, i) => (
        <ul
          key={i}
          className="grid min-h-10 grid-cols-5 gap-1 text-center font-medium"
        >
          <li className="bg-muted border-border flex items-center justify-center rounded-lg border p-1">
            {stock.date}
          </li>
          <li className="bg-muted border-border col-span-2 flex items-center justify-center rounded-lg border p-1">
            {stock.name}
          </li>
          <li className="bg-muted border-border flex items-center justify-center rounded-lg border p-1">
            {stock.amount}
          </li>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="h-full">
                Edit
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader className="flex flex-col gap-5">
                <DialogTitle>Edit {stock.name}</DialogTitle>
                <DialogDescription className="flex flex-col gap-5">
                  <div className="flex flex-col gap-2">
                    <Label>Amount</Label>
                    <Input
                      type="number"
                      defaultValue={stock.amount}
                      className="bg-card"
                    />
                  </div>
                  <div className="flex items-center gap-10">
                    <Button variant="destructive">
                      <Trash2Icon className="size-4" />
                      Delete Product
                    </Button>
                    <div className="flex flex-1 justify-end gap-2">
                      <Button variant="default" className="w-1/2">
                        <PlusIcon className="size-4" />
                        Add
                      </Button>
                      <Button variant="default" className="w-1/2">
                        <MinusIcon className="size-4" />
                        Decrease
                      </Button>
                    </div>
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </ul>
      ))}
    </div>
  );
};
export default StockList;
