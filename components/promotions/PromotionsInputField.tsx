import { SearchIcon } from "lucide-react";
import { Input } from "../ui/input";

const PromotionsInputField = () => {
  return (
    <div className="relative flex items-center">
      <SearchIcon size={18} className="absolute top-2 left-2" />
      <Input
        type="text"
        placeholder="Promotion Name"
        name="name"
        className="pl-8"
      />
    </div>
  );
};
export default PromotionsInputField;
