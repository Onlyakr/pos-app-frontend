"use client";

import { Circle } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "An area chart with gradient fill";

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

const chartConfig = {
  thisMonth: {
    label: "This Month",
    color: "#FFD210",
  },
  lastMonth: {
    label: "Last Month",
    color: "#52C6DC",
  },
} satisfies ChartConfig;

export default function ChartAreaGradient({
  className,
  monthValue,
  graphData,
}: {
  className?: string;
  monthValue?: {
    thisMonth: string;
    lastMonth: string;
  };
  graphData?: {
    date: string;
    thisMonth: number;
    lastMonth: number;
  }[];
}) {
  return (
    <Card className={className}>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={graphData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) =>
                value ? value.toString().slice(0, 3) : ""
              }
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-lastMonth)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-lastMonth)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-thisMonth)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-thisMonth)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <Area
              dataKey="thisMonth"
              type="natural"
              fill="url(#fillMobile)"
              fillOpacity={0.4}
              stroke="var(--color-thisMonth)"
              stackId="a"
            />
            <Area
              dataKey="lastMonth"
              type="natural"
              fill="url(#fillDesktop)"
              fillOpacity={0.4}
              stroke="var(--color-lastMonth)"
              stackId="b"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardHeader className="flex justify-center divide-x-2 divide-gray-600 px-2">
        <div className="flex-1 text-center">
          <div className="flex items-center justify-center gap-1">
            <Circle className="size-3 fill-[#52C6DC] text-[#52C6DC]" />
            <p className="text-muted-foreground">Last Month</p>
          </div>
          <p className="font-bold">
            {formatNumber(String(monthValue?.lastMonth) || "0")} Baht
          </p>
        </div>

        <div className="flex-1 text-center">
          <div className="flex items-center justify-center gap-1">
            <Circle className="size-3 fill-[#FFD210] text-[#FFD210]" />
            <p className="text-muted-foreground">This Month</p>
          </div>
          <p className="font-bold">
            {formatNumber(String(monthValue?.thisMonth) || "0")} Baht
          </p>
        </div>
      </CardHeader>
    </Card>
  );
}
