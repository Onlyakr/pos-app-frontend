"use client";

import { SearchIcon } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "../ui/input";

import AddPromotionButton from "./AddPromotionButton";
import DatePicker from "./DatePicker";
import GoBackButton from "../GoBackButton";

const PromotionFilter = () => {
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [date, setDate] = useState<Date | undefined>(
    searchParams.get("date") ? new Date(searchParams.get("date")!) : undefined,
  );
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (search !== "") params.set("search", search);
    if (date !== undefined)
      params.set("date", date.toLocaleDateString("en-CA"));
    router.replace(`/promotions?${params.toString()}`);
  };

  const handleClear = () => {
    setSearch("");
    setDate(undefined);
    window.location.href = "/promotions";
  };
  return (
    <div className="flex items-center justify-between gap-4">
      <GoBackButton />

      <form className="flex flex-1 items-center gap-2" onSubmit={handleSearch}>
        <Input
          type="text"
          placeholder="Search by name"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <DatePicker date={date} setDate={setDate} />

        <Button variant="outline" type="submit">
          <SearchIcon />
        </Button>
        <Button variant="destructive" onClick={handleClear}>
          Clear
        </Button>
      </form>
      <AddPromotionButton />
    </div>
  );
};
export default PromotionFilter;
