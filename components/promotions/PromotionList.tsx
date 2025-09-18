"use client";

import { getPromotions } from "@/lib/promotion";
import { PromotionProps } from "@/types";
import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";

const PromotionList = ({ search, date }: { search: string; date: string }) => {
  const [promotions, setPromotions] = useState<PromotionProps[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPromotions = async () => {
      try {
        setLoading(true);
        const { promotion } = await getPromotions(search, date);
        console.log(promotion);
        setPromotions(promotion);
      } catch (error) {
        console.error(error);
        setPromotions([]);
      } finally {
        setLoading(false);
      }
    };
    fetchPromotions();
  }, [search, date]);

  if (loading) return <Loader2 className="w-full animate-spin" />;

  return (
    <div className="flex flex-col gap-1 overflow-auto">
      {promotions.map((promotion: PromotionProps, i) => (
        <ul key={i} className="grid min-h-10 grid-cols-7 gap-1 text-center">
          <li className="bg-muted border-border flex items-center justify-center rounded-lg border p-1">
            {promotion.startDate}
          </li>
          <li className="bg-muted border-border flex items-center justify-center rounded-lg border p-1">
            {promotion.endDate}
          </li>
          <li className="bg-muted border-border col-span-3 flex items-center justify-center rounded-lg border p-1">
            {promotion.product}
          </li>
          <li className="bg-muted border-border flex items-center justify-center rounded-lg border p-1">
            {promotion.discountType === "PERCENT"
              ? `${promotion.discountValue}%`
              : `${promotion.discountValue}฿`}
          </li>
          <li className="bg-muted border-border flex items-center justify-center rounded-lg border p-1">
            {promotion.quota ? promotion.quota : "N/A"}
          </li>
        </ul>
      ))}
    </div>
  );
};
export default PromotionList;
