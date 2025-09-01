import PromotionFilter from "@/components/promotions/PromotionFilter";
import PromotionHeader from "@/components/promotions/PromotionHeader";
import PromotionList from "@/components/promotions/PromotionList";

const PromotionsPage = () => {
  return (
    <div className="flex size-full flex-col gap-3 font-medium">
      <PromotionFilter />

      <div className="flex flex-col gap-2 overflow-auto text-sm">
        <PromotionHeader />
        {/* <PromotionList /> */}
      </div>
    </div>
  );
};
export default PromotionsPage;
