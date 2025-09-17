"use client";

import { Button } from "../ui/button";
import { SearchIcon } from "lucide-react";
import { Input } from "../ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";

import Link from "next/link";

const StockFilter = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (search !== "") params.set("search", search);
    router.replace(`/stocks?${params.toString()}`);
  };

  const handleClear = () => {
    setSearch("");
    router.replace(`/stocks`);
  };

  return (
    <div className="flex items-center gap-2">
      <form className="flex flex-1 items-center gap-2" onSubmit={handleSearch}>
        <Input
          type="text"
          placeholder="Search by name"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <Button variant="outline" type="submit">
          <SearchIcon />
        </Button>
      </form>
      <Button variant="destructive" onClick={handleClear}>
        Clear
      </Button>

      <Button variant="outline" asChild>
        <Link href="/stocks/add">Add Product</Link>
      </Button>

      <Button variant="outline" asChild>
        <Link href="/stocks/history">Stocks History</Link>
      </Button>
    </div>
  );
};
export default StockFilter;
