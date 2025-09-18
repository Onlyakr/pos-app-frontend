import StockFilter from "@/components/stocks/StockFilter";
import StockHeader from "@/components/stocks/StockHeader";
import StockList from "@/components/stocks/StockList";

const StocksPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ search: string }>;
}) => {
  const { search } = await searchParams;

  return (
    <div className="flex size-full flex-col gap-3 font-medium">
      <StockFilter />

      <div className="flex flex-col gap-2 overflow-auto text-sm">
        <StockHeader />
        <StockList search={search} />
      </div>
    </div>
  );
};
export default StocksPage;
