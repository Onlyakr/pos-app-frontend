import PromotionFilter from "@/components/promotions/PromotionFilter";
import PromotionHeader from "@/components/promotions/PromotionHeader";
import PromotionList from "@/components/promotions/PromotionList";

const PromotionsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ search: string; date: string }>;
}) => {
  const { search, date } = await searchParams;

  return (
    <div className="flex size-full flex-col gap-3 font-medium">
      <PromotionFilter />

      <div className="flex flex-col gap-2 overflow-auto text-sm">
        <PromotionHeader />
        <PromotionList search={search} date={date} />
      </div>
    </div>
  );
};
export default PromotionsPage;
