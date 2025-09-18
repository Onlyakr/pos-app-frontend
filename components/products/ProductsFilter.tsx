"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import { SearchIcon } from "lucide-react";
import { Input } from "../ui/input";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import GoBackButton from "../GoBackButton";

const ProductsFilter = () => {
  const searchParams = useSearchParams();
  const [category, setCategory] = useState(
    searchParams.get("category") || "all",
  );
  const [search, setSearch] = useState(searchParams.get("search") || "");

  const router = useRouter();

  const handleChangeCategory = (value: string) => {
    setCategory(value);
    const params = new URLSearchParams();
    if (value !== "all") params.set("category", value);
    if (search) params.set("search", search);
    router.replace(`/products?${params.toString()}`);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (category !== "all") params.set("category", category);
    if (search !== "") params.set("search", search);
    router.replace(`/products?${params.toString()}`);
  };

  const handleClear = () => {
    setCategory("all");
    setSearch("");
    router.replace(`/products`);
  };

  return (
    <div className="flex items-center justify-between gap-2">
      <GoBackButton />

      <Select value={category} onValueChange={handleChangeCategory}>
        <SelectTrigger className="w-40">
          <SelectValue placeholder="Select category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="Anime">Anime</SelectItem>
          <SelectItem value="Self-development">Self-development</SelectItem>
          <SelectItem value="Finance">Finance</SelectItem>
          <SelectItem value="Education">Education</SelectItem>
        </SelectContent>
      </Select>

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
    </div>
  );
};
export default ProductsFilter;
