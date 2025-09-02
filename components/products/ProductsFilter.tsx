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
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const ProductsFilter = () => {
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");

  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const categoryParam = searchParams.get("category");
    const searchParam = searchParams.get("search");
    setCategory(categoryParam || "all");
    setSearch(searchParam || "");
  }, [searchParams]);

  const handleChangeCategory = (value: string) => {
    const params = new URLSearchParams();
    if (value !== "all") params.set("category", value);
    // if (search) params.set("search", search);
    router.replace(`/products?${params.toString()}`);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const params = new URLSearchParams();
    // if (category !== "all") params.set("category", category);
    if (search !== "") params.set("search", search);
    router.replace(`/products?${params.toString()}`);
  };

  return (
    <div className="flex items-center justify-between gap-2">
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
          placeholder="Search by barcode"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <Button variant="outline" type="submit">
          <SearchIcon />
        </Button>
      </form>
    </div>
  );
};
export default ProductsFilter;
