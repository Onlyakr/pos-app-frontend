import HistoryFilter from "@/components/history/HistoryFilter";
import HistoryHeader from "@/components/history/HistoryHeader";
import HistoryList from "@/components/history/HistoryList";

const PromotionsPage = () => {
  return (
    <div className="flex size-full flex-col gap-3 font-medium">
      <HistoryFilter />

      <div className="flex flex-col gap-2 overflow-auto text-sm">
        <HistoryHeader />
        <HistoryList />
      </div>
    </div>
  );
};
export default PromotionsPage;
