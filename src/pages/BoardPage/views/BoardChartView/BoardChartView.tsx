import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { DEFAULT_COLUMNS } from "@/data";
import { useCards } from "@/hooks/useCards";
import { useParams } from "react-router-dom";
import { Bar, BarChart, Cell, XAxis, YAxis } from "recharts";

type ChartDataType = {
  columnName: string;
  cardsCount: number;
};

const chartConfig = {
  desktop: {
    label: "Column Cards",
  },
} satisfies ChartConfig;

const BoardChartView = () => {
  const params = useParams();
  const { getCardsByBoardAndColumn } = useCards();
  const chartData: ChartDataType[] = [];

  DEFAULT_COLUMNS.forEach((c) => {
    const columnCards = getCardsByBoardAndColumn(params.id!, c.id);
    chartData.push({ columnName: c.title, cardsCount: columnCards.length });
  });
  const columnColors = DEFAULT_COLUMNS.map((c) => c.color);

  return (
    <div className="flex justify-center w-full h-full mt-5 my-auto">
      <ChartContainer config={chartConfig} className="max-h-[600px]">
        <BarChart accessibilityLayer data={chartData} barSize={80}>
          <XAxis
            dataKey="columnName"
            type="category"
            tickLine={true}
            tickMargin={15}
            axisLine={false}
          />
          <YAxis
            type="number"
            dataKey="cardsCount"
            tickSize={4}
            tickMargin={6}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Bar dataKey="cardsCount" radius={5}>
            {chartData.map((_, idx) => (
              <Cell key={`cell-${idx}`} fill={columnColors[idx]} />
            ))}
          </Bar>
        </BarChart>
      </ChartContainer>
    </div>
  );
};

export default BoardChartView;
