"use client";

import { ProductProps } from "@/utils/data";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, SendHorizontal } from "lucide-react";
import { createProduct } from "@/lib/products";

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
  const [product, setProduct] = useState<ProductProps[]>([]);

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
    // try {
    //   setLoading(true);
    //   const res = await createProduct({
    //     name: values.name,
    //     author: values.author,
    //     price: Number(values.price),
    //   });
    //   console.log(res);
    // } catch (error) {
    //   console.error(error);
    // } finally {
    //   setLoading(false);
    // }
    console.log(values);
  };

  return (
    <div className="container mx-auto flex h-full flex-col items-center justify-center gap-5 p-5">
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
                    <Input type="text" placeholder="2025-09-15" {...field} />
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
                    <Input type="text" placeholder="2025-09-15" {...field} />
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
                    <Input type="number" placeholder="10" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex gap-5">
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
                    <Input type="text" placeholder="Anime" {...field} />
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
              <FormItem className="w-1/2">
                <FormLabel>Detail</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="This is a book about..."
                    {...field}
                  />
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
