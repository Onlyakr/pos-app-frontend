import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Send, Trash2Icon } from "lucide-react";
import { StockProps } from "@/utils/data";

const EditStock = ({ stock }: { stock: StockProps }) => {
  return (
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
              <div className="flex gap-2">
                <Input type="number" defaultValue={0} className="bg-card" />
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="increase">Increase</SelectItem>
                    <SelectItem value="decrease">Decrease</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button className="border-border text-foreground w-1/2 border bg-green-500/60">
                <Send className="size-4" />
                Submit
              </Button>

              <Button variant="destructive" className="w-1/2">
                <Trash2Icon className="size-4" />
                Delete Product
              </Button>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
export default EditStock;
