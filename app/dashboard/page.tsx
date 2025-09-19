import AppLayout from "@/components/layout/AppLayout";
import BarChart from "@/components/dashboard/BarChart";
import AreaChart from "@/components/dashboard/AreaChart";

const DashboardPage = () => {
  return (
    <AppLayout>
      {/* <div className="flex h-full flex-1 items-center justify-center gap-2 overflow-auto">
        <div className="flex h-full w-1/2 flex-col justify-between gap-2">
          <div className="h-1/4 border border-red-500">chart 1</div>
          <AreaChart className="h-3/4" />
        </div>
        <div className="flex h-full w-1/2 flex-col justify-between gap-2">
          <BarChart className="h-3/4" />
          <div className="h-1/4 border border-red-500">chart 2</div>
        </div>
      </div> */}
      <div className="grid size-full grid-cols-1 gap-2 overflow-auto sm:grid-cols-2 sm:grid-rows-6">
        <div className="border border-red-500 sm:row-span-1 lg:row-span-2">
          chart 1
        </div>
        <AreaChart className="sm:row-span-5 lg:row-span-4" />
        <BarChart className="sm:row-span-5 lg:row-span-4" />
        <div className="border border-red-500 sm:row-span-1 lg:row-span-2">
          chart 2
        </div>
      </div>
    </AppLayout>
  );
};
export default DashboardPage;
