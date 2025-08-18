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
                  <div className="flex gap-2">
                    <Button variant="destructive" className="flex-1">
                      Delete
                    </Button>
                    <Button variant="default" className="flex-1">
                      Save
                    </Button>
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
