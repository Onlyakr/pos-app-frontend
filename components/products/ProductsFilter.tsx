import Categories from "@/components/products/Categories";
import InputField from "@/components/products/InputField";

const ProductsFilter = () => {
  return (
    <div className="flex items-center justify-between gap-2">
      <Categories />
      <InputField />
    </div>
  );
};
export default ProductsFilter;
