"use client";

import AppLayout from "@/components/layout/AppLayout";
import BarChart from "@/components/dashboard/BarChart";
import AreaChart from "@/components/dashboard/AreaChart";
import { useEffect, useState } from "react";
import { Coins, BookA, ReceiptText, Wallet } from "lucide-react";

export interface MonthYear {
  month: {
    thisMonth: string;
    lastMonth: string;
  };
  year?: string;
}

interface DaySummery {
  income: string | number;
  order: string;
  product: string;
}

interface GraphValue {
  id: number;
  date: string;
  value: string;
}

interface GraphMap {
  date: string;
  value: number;
}
[];

interface GraphDay {
  thisMonth: {
    id: number;
    date: string;
    value: string;
  }[];
  lastMonth: {
    id: number;
    date: string;
    value: string;
  }[];
}

type ChartItem = {
  date: string;
  thisMonth: number;
  lastMonth: number;
};

const backend = process.env.NEXT_PUBLIC_API_URL;

const mapPriceInDay = (price: string | number) => {
  if (typeof price === "string") {
    price = parseFloat(price);
  }
  if (isNaN(price)) return "0";
  if (price >= 1000) {
    return (price / 1000).toFixed(1).replace(/\.0$/, "") + " k";
  }
  return price.toString();
};

const formatNumber = (number: string): string => {
  const num = parseFloat(number);
  if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(1).replace(/\.0$/, "") + " M";
  } else if (num >= 100_000) {
    return (num / 1_000).toFixed(0) + " k";
  } else {
    return num.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }
};

const mapThisAndLastMonth = (month: GraphDay) => {
  const map: Record<string, ChartItem> = {};
  const thisMonth = month.thisMonth;
  const lastMonth = month.lastMonth;

  thisMonth.forEach((item) => {
    const day = new Date(item.date).getDate().toString();
    if (!map[day]) map[day] = { date: day, thisMonth: 0, lastMonth: 0 };
    map[day].thisMonth = parseInt(item.value);
  });

  lastMonth.forEach((item) => {
    const day = new Date(item.date).getDate().toString().padStart(2, "0");
    if (!map[day]) map[day] = { date: day, thisMonth: 0, lastMonth: 0 };
    map[day].lastMonth = parseInt(item.value);
  });

  const chartData: ChartItem[] = Object.values(map).sort(
    (a, b) => parseInt(a.date) - parseInt(b.date),
  );

  return chartData;
};

const chartYear = (rawData: GraphValue[]) => {
  const data = rawData.map((item) => {
    const year = item.date.split("-")[0];
    const value = parseInt(item.value);

    return {
      date: year,
      value,
    };
  });

  return data.reverse();
};

const chartMonth = (rawData: GraphValue[]) => {
  const data = rawData.map((item) => {
    const [year, month] = item.date.split("-");

    const date = new Date(parseInt(year), parseInt(month) - 1);
    const monthName = date.toLocaleString("en-US", { month: "long" });

    const value = parseInt(item.value);

    return {
      date: monthName,
      value,
    };
  });
  return data.reverse();
};

const chartDay = (rawData: GraphDay) => {
  const date = rawData.thisMonth;
  const data = date.map((item) => {
    const day = item.date.split("-")[2];
    const value = parseInt(item.value);
    return {
      date: day,
      value,
    };
  });
  return data.reverse();
};

const DashboardPage = () => {
  const [monthYear, setMonthYear] = useState<MonthYear | null>(null);
  const [daySummery, setDaySummery] = useState<DaySummery | null>(null);
  const [graphType, setGraphType] = useState<string>("Day");
  const [graphDay, setGraphDay] = useState<ChartItem[] | null>(null);
  const [graphMap, setGraphMap] = useState<GraphMap[] | null>([]);

  useEffect(() => {
    const fetchFixed = async () => {
      try {
        const [TotalDayRes, MonthYearRes] = await Promise.all([
          fetch(backend + "/dashboard/day", {
            credentials: "include",
          }),
          fetch(backend + "/dashboard/monthYear", {
            credentials: "include",
          }),
        ]);

        if (!TotalDayRes.ok || !MonthYearRes.ok) {
          throw new Error("Can't fetch data");
        }

        const [TotalDay, MonthYear] = await Promise.all([
          TotalDayRes.json(),
          MonthYearRes.json(),
        ]);

        TotalDay.income = mapPriceInDay(TotalDay.income);
        setDaySummery(TotalDay as DaySummery);
        setMonthYear(MonthYear as MonthYear);
      } catch (err) {
        console.error("Error during fetch");
      }
    };
    fetchFixed();
  }, []);

  useEffect(() => {
    const fetchBefore7 = async () => {
      try {
        const before7Res = await fetch(
          backend + "/dashboard/7day/" + graphType,
        );

        if (!before7Res.ok) {
          throw new Error("Can't fetch data");
        }

        const { date: before7 } = await before7Res.json();

        if (graphType === "Day") {
          const chartData = mapThisAndLastMonth(before7 as GraphDay);
          const barGraph = chartDay(before7 as GraphDay);
          setGraphDay(chartData as ChartItem[]);
          setGraphMap(barGraph);
        } else if (graphType === "Month") {
          const data = chartMonth(before7);
          setGraphMap(data as GraphMap[]);
        } else if (graphType === "Year") {
          const data = chartYear(before7);
          setGraphMap(data as GraphMap[]);
        }
      } catch (error) {
        console.error("Error during fetch");
      }
    };
    fetchBefore7();
  }, [graphType]);

  return (
    <AppLayout>
      <div className="grid size-full grid-cols-1 gap-2 overflow-auto sm:grid-cols-2 sm:grid-rows-6">
        {/* today summery */}
        <div className="flex flex-col gap-2 pt-2 pb-2 text-black sm:row-span-2 sm:flex-row">
          {/* price box */}
          <div className="relative flex flex-1 flex-col justify-center gap-1 rounded-lg bg-[#CE9595] p-2">
            <Coins className="absolute top-2 right-2 sm:h-6 sm:w-6" />
            <p className="flex flex-col text-sm font-bold lg:flex-row">
              <span>{daySummery?.income}</span>
              <span className="lg:ml-1">Baht</span>
            </p>
            <p className="text-sm">Total Sales</p>
          </div>

          {/* order box */}
          <div className="relative flex flex-1 flex-col justify-center rounded-lg bg-[#A77B22] p-2">
            <ReceiptText className="absolute top-2 right-2 sm:h-6 sm:w-6" />
            <p className="text-sm font-bold">{daySummery?.order}</p>
            <p className="text-sm">Total Order</p>
          </div>

          {/* product box */}
          <div className="relative flex flex-1 flex-col justify-center rounded-lg bg-[#52C6DC] p-2">
            <BookA className="absolute top-2 right-2 sm:h-6 sm:w-6" />
            <p className="text-sm font-bold">{daySummery?.product}</p>
            <p className="text-sm">Total Product</p>
          </div>
        </div>

        {/* this month and last month chart */}
        {graphDay && (
          <AreaChart
            className="divide-white-500 justify-center gap-2 divide-y-2 py-4 sm:row-span-5 lg:row-span-4"
            monthValue={monthYear?.month}
            graphData={graphDay as ChartItem[]}
          />
        )}

        {/* 7 before day, month, year */}
        <div className="sm:row-span-4 lg:row-span-4">
          <BarChart
            className="h-full gap-2 p-4"
            graphType={graphType}
            setGraphType={setGraphType}
            chartData={graphMap as GraphMap[]}
          />
        </div>

        {/* total month and year box */}
        <div className="overflow-hidden sm:row-span-1 lg:row-span-2 lg:mt-2">
          <div className="flex gap-0.5">
            <Wallet className="size-5 text-yellow-500 lg:size-7" />
            <p className="text-sm lg:text-xl">Total Month Income</p>
            <p className="text-m ml-auto lg:text-2xl">
              {formatNumber(monthYear?.month.thisMonth || "0")} baht
            </p>
          </div>
          <div className="flex gap-1">
            <Wallet className="size-5 text-[#52C6DC] lg:size-7" />
            <p className="text-sm lg:text-xl">Total Year Income</p>
            <p className="text-m ml-auto lg:text-2xl">
              {formatNumber(monthYear?.year || "0")} baht
            </p>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};
export default DashboardPage;
