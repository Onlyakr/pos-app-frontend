"use client";

import { CircleArrowLeft, SearchIcon } from "lucide-react";
import { Button } from "../ui/button";

import Link from "next/link";
import AddPromotionButton from "./AddPromotionButton";
import DatePicker from "./DatePicker";
import PromotionsInputField from "./PromotionsInputField";

const PromotionFilter = () => {
  return (
    <div className="flex items-center justify-between gap-4">
      <Button
        className="bg-card text-foreground border-border hover:text-card size-9 rounded-full border transition-colors"
        asChild
      >
        <Link href="/products">
          <CircleArrowLeft />
        </Link>
      </Button>

      <div className="flex flex-1 items-center justify-center gap-2">
        <PromotionsInputField />

        <DatePicker />

        <Button variant="outline" type="submit" className="size-9 rounded-full">
          <SearchIcon size={18} />
        </Button>
      </div>

      <AddPromotionButton />
    </div>
  );
};
export default PromotionFilter;
