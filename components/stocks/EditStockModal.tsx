"use client";

import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Loader2, Pencil, Send, Trash2Icon } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { StockProps } from "@/types";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { updateStock } from "@/lib/stock";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { deleteProduct } from "@/lib/product";

const formSchema = z.object({
  quantity: z.string().min(0),
  type: z.enum(["increase", "decrease"]),
});

const EditStockModal = ({ stock }: { stock: StockProps }) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      quantity: "",
      type: "increase",
    },
  });

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);
      await updateStock({
        product: stock.name,
        quantity: Number(values.quantity),
        transactionType: values.type,
      });
      toast.success("Stock updated successfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to update stock");
    } finally {
      setLoading(false);
      setOpen(false);
      window.location.reload();
    }
  };

  const handleDelete = async (id: string) => {
    try {
      setLoading(true);
      await deleteProduct(id);
      toast.success("Stock deleted successfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete stock");
    } finally {
      setLoading(false);
      setOpen(false);
      window.location.reload();
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="h-full">
          <Pencil className="size-4" />
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="flex flex-col gap-5">
          <DialogTitle>Edit {stock.name}</DialogTitle>
          <DialogDescription className="flex flex-col gap-5">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className="flex flex-col gap-2"
              >
                <div className="flex items-center gap-2">
                  <FormField
                    control={form.control}
                    name="quantity"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Quantity</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="100" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="type"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Type</FormLabel>
                        <FormControl>
                          <Select
                            onValueChange={field.onChange}
                            value={field.value}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Increase" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="increase">Increase</SelectItem>
                              <SelectItem value="decrease">Decrease</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    type="submit"
                    disabled={loading}
                    className="border-border w-1/2 border"
                  >
                    {loading ? (
                      <Loader2 className="size-4 animate-spin" />
                    ) : (
                      <Send className="size-4" />
                    )}
                    Submit
                  </Button>

                  <Button
                    type="button"
                    variant="destructive"
                    className="w-1/2"
                    onClick={() => handleDelete(stock.id!)}
                    disabled={loading}
                  >
                    {loading ? (
                      <Loader2 className="size-4 animate-spin" />
                    ) : (
                      <Trash2Icon className="size-4" />
                    )}
                    Delete Product
                  </Button>
                </div>
              </form>
            </Form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
export default EditStockModal;
