"use client";

import { CircleArrowLeft, SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import DatePicker from "@/components/promotions/DatePicker";
import { Input } from "@/components/ui/input";

const StocksHistoryFilter = () => {
  return (
    <div className="flex items-center justify-between gap-4">
      <Button
        className="bg-card text-foreground border-border hover:text-card size-9 rounded-full border transition-colors"
        asChild
      >
        <Link href="/stocks">
          <CircleArrowLeft />
        </Link>
      </Button>

      <div className="flex flex-1 items-center justify-center gap-2">
        <div className="relative flex flex-1 items-center">
          <SearchIcon size={18} className="absolute top-2 left-2" />
          <Input
            type="text"
            placeholder="Product Name"
            name="name"
            className="pl-8"
          />
        </div>

        <DatePicker />

        <Button variant="outline" type="submit" className="size-9">
          <SearchIcon size={18} />
        </Button>
      </div>
    </div>
  );
};
export default StocksHistoryFilter;
