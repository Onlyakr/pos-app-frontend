import StocksHistoryFilter from "@/components/history/stocks/StocksHistoryFilter";
import StocksHistoryHeader from "@/components/history/stocks/StocksHistoryHeader";
import StocksHistoryList from "@/components/history/stocks/StocksHistoryList";

const StocksHistoryPage = () => {
  return (
    <div className="flex size-full flex-col gap-3 font-medium">
      <StocksHistoryFilter />

      <div className="flex flex-col gap-2 overflow-auto text-sm">
        <StocksHistoryHeader />
        <StocksHistoryList />
      </div>
    </div>
  );
};
export default StocksHistoryPage;
