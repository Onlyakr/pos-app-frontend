import { Skeleton } from "@/components/ui/skeleton";
import AppLayout from "@/components/layout/AppLayout";

const DashboardPage = () => {
  return (
    <AppLayout>
      <div className="grid size-full grid-cols-2 grid-rows-7 gap-2">
        <Skeleton className="col-span-1 row-span-2" />
        <Skeleton className="col-span-1 row-span-3" />
        <Skeleton className="col-span-1 row-span-3" />
        <Skeleton className="col-span-1 row-span-2" />
        <Skeleton className="col-span-1 row-span-1" />
        <Skeleton className="col-span-1 row-span-2" />
        <Skeleton className="col-span-1 row-span-1" />
      </div>
    </AppLayout>
  );
};
export default DashboardPage;
