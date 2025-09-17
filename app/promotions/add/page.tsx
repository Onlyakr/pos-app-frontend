"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { createPromotion } from "@/lib/promotion";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { date } from "@/lib/utils";
import { Loader2, SendHorizontal } from "lucide-react";

const formSchema = z.object({
  product: z.string().min(1, "Product is required"),
  startDate: z.string().min(1, "Start Date is required"),
  endDate: z.string().min(1, "End Date is required"),
  discountValue: z.string().min(1, "Discount Value is required"),
  discountType: z.enum(["PERCENT", "FIXED"]),
  remainingQuota: z.string().min(1, "Remaining Quota is required"),
});

const AddPromotionPage = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      product: "",
      startDate: "",
      endDate: "",
      discountValue: "",
      discountType: "PERCENT",
      remainingQuota: "",
    },
  });

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);
      const res = await createPromotion({
        product: values.product,
        startDate: values.startDate,
        endDate: values.endDate,
        discountValue: Number(values.discountValue),
        discountType: values.discountType,
        remainingQuota: Number(values.remainingQuota),
      });
      toast.success("Promotion created successfully");
      router.push("/promotions");
      return res;
    } catch (error) {
      toast.error("Failed to create promotion");
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto flex h-full flex-col items-center justify-center gap-5 p-5">
      <Form {...form}>
        <form
          className="flex w-full flex-col gap-5"
          onSubmit={form.handleSubmit(handleSubmit)}
        >
          <div className="flex items-center gap-5">
            <FormField
              control={form.control}
              name="product"
              render={({ field }) => (
                <FormItem className="w-1/2">
                  <FormLabel>Product</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Fish Tank" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex w-1/2 gap-5">
              <div className="flex items-end gap-1">
                <FormField
                  control={form.control}
                  name="discountValue"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Discount</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="10" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="discountType"
                  render={({ field }) => (
                    <FormItem>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select discount type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="PERCENT">PERCENT</SelectItem>
                          <SelectItem value="FIXED">FIXED</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="remainingQuota"
                render={({ field }) => (
                  <FormItem className="w-1/2">
                    <FormLabel>Quota</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="20" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="flex items-center gap-5">
            <FormField
              control={form.control}
              name="startDate"
              render={({ field }) => (
                <FormItem className="w-1/2">
                  <FormLabel>Start Date</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder={date} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="endDate"
              render={({ field }) => (
                <FormItem className="w-1/2">
                  <FormLabel>End Date</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder={date} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

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
export default AddPromotionPage;
