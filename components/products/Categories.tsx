import { ChevronDown } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const Categories = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <ChevronDown className="h-4 w-4" />
          <p className="text-sm font-medium">Categories</p>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        side="bottom"
        align="start"
        sideOffset={10}
        className="bg-muted border-border"
      >
        <DropdownMenuItem>Anime</DropdownMenuItem>
        <DropdownMenuItem>Self-development</DropdownMenuItem>
        <DropdownMenuItem>Finance</DropdownMenuItem>
        <DropdownMenuItem>Education</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default Categories;
