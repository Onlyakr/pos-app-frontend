"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, SendHorizontal } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { createProduct } from "@/lib/product";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import GoBackButton from "@/components/GoBackButton";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  author: z.string().min(1, "Author is required"),
  price: z.string().min(1, "Price is required"),
  barcode: z.string().min(1, "Barcode is required"),
  quantity: z.string().min(1, "Quantity is required"),
  category: z.enum(["Anime", "Self-development", "Finance", "Education"]),
  detail: z.string().min(1, "Detail is required"),
});

const AddProduct = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      author: "",
      price: "",
      barcode: "",
      quantity: "",
      category: "Anime",
      detail: "",
    },
  });

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);
      const res = await createProduct({
        name: values.name,
        author: values.author,
        price: Number(values.price),
        barcode: values.barcode,
        quantity: Number(values.quantity),
        category: values.category,
        detail: values.detail,
      });
      toast.success("Product created successfully");
      router.push("/stocks");
      return res;
    } catch (error) {
      console.error(error);
      toast.error("Failed to create product");
    } finally {
      setLoading(false);
      router.refresh();
    }
  };

  return (
    <div className="container mx-auto flex h-full flex-col items-center justify-center gap-5 p-5">
      <GoBackButton className="absolute top-5 left-5" />
      <Form {...form}>
        <form
          className="flex w-full flex-col gap-5"
          onSubmit={form.handleSubmit(handleSubmit)}
        >
          <div className="flex gap-5">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-1/2">
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Fish Tank" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="author"
              render={({ field }) => (
                <FormItem className="w-1/2">
                  <FormLabel>Author</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="John Mayer" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex gap-5">
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem className="w-1/2">
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="100" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="barcode"
              render={({ field }) => (
                <FormItem className="w-1/2">
                  <FormLabel>Barcode</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="1234567890" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex items-center gap-5">
            <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem className="w-1/2">
                  <FormLabel>Quantity</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="20" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem className="w-1/2">
                  <FormLabel>Category</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Anime" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Anime">Anime</SelectItem>
                        <SelectItem value="Self-development">
                          Self-development
                        </SelectItem>
                        <SelectItem value="Finance">Finance</SelectItem>
                        <SelectItem value="Education">Education</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="detail"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Detail</FormLabel>
                <FormControl>
                  <Textarea placeholder="This is a book about..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" disabled={loading}>
            {loading ? (
              <p className="flex items-center gap-2">
                <Loader2 className="size-4 animate-spin" />
                <span>Submitting...</span>
              </p>
            ) : (
              <p className="flex items-center gap-2">
                <SendHorizontal className="size-4" />
                <span>Submit</span>
              </p>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};
export default AddProduct;
