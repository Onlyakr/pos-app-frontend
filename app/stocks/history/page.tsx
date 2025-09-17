import { getStocksHistory } from "@/lib/stock";

import StocksHistoryFilter from "@/components/history/stocks/StocksHistoryFilter";
import StocksHistoryHeader from "@/components/history/stocks/StocksHistoryHeader";
import StocksHistoryList from "@/components/history/stocks/StocksHistoryList";

const StocksHistoryPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ search: string; date: string }>;
}) => {
  const { search, date } = await searchParams;
  console.log(search, date);
  const { data: stocks } = await getStocksHistory(search, date);

  return (
    <div className="flex size-full flex-col gap-3 font-medium">
      <StocksHistoryFilter />

      <div className="flex flex-col gap-2 overflow-auto text-sm">
        <StocksHistoryHeader />
        <StocksHistoryList stocks={stocks} />
      </div>
    </div>
  );
};
export default StocksHistoryPage;
