import { SearchIcon } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const InputField = () => {
  return (
    <form className="flex grow items-center gap-2">
      <Button variant="outline" type="submit">
        <SearchIcon size="icon" />
      </Button>
      <Input type="text" placeholder="Search here..." name="search" />
    </form>
  );
};
export default InputField;
