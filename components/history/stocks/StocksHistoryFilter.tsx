"use client";

import { SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";

import DatePicker from "@/components/promotions/DatePicker";

const StocksHistoryFilter = () => {
  const [search, setSearch] = useState("");
  const [date, setDate] = useState<Date | undefined>(undefined);

  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (search !== "") params.set("search", search);
    if (date !== undefined)
      params.set("date", date.toLocaleDateString("en-CA"));
    router.replace(`/stocks/history?${params.toString()}`);
  };

  const handleClear = () => {
    setSearch("");
    setDate(undefined);
    router.replace(`/stocks/history`);
  };
  return (
    <div className="flex items-center justify-between gap-4">
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
    </div>
  );
};
export default StocksHistoryFilter;
