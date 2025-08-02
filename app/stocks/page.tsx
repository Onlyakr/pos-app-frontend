import { Skeleton } from "@/components/ui/skeleton";
import AppLayout from "@/components/layout/AppLayout";

const StockPage = () => {
  return (
    <AppLayout>
      <div className="flex size-full flex-col gap-3">
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-8 w-full" />
        <Skeleton className="w-full flex-1" />
      </div>
    </AppLayout>
  );
};
export default StockPage;
