import StockFilter from "@/components/stocks/StockFilter";
import StockHeader from "@/components/stocks/StockHeader";
import StockList from "@/components/stocks/StockList";

const StocksPage = () => {
  return (
    <div className="flex size-full flex-col gap-3 font-medium">
      <StockFilter />

      <div className="flex flex-col gap-2 overflow-auto text-sm">
        <StockHeader />
        <StockList />
      </div>
    </div>
  );
};
export default StocksPage;
