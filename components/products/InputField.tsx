"use client";

import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { SearchIcon } from "lucide-react";

const InputField = () => {
  return (
    <form className="flex grow items-center gap-2">
      <Button variant="outline" type="submit">
        <SearchIcon size="icon" />
      </Button>
      <Input type="text" placeholder="Search here..." />
    </form>
  );
};
export default InputField;
