import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ChartContainer, ChartTooltip, ChartTooltipContent, } from "@/components/ui/chart";
import { DEFAULT_COLUMNS } from "@/data";
import { useCards } from "@/hooks/useCards";
import { useParams } from "react-router-dom";
import { Bar, BarChart, Cell, XAxis, YAxis } from "recharts";
const chartConfig = {
    desktop: {
        label: "Column Cards",
    },
};
const BoardChartView = () => {
    const params = useParams();
    const { getCardsByBoardAndColumn } = useCards();
    const chartData = [];
    DEFAULT_COLUMNS.forEach((c) => {
        const columnCards = getCardsByBoardAndColumn(params.id, c.id);
        chartData.push({ columnName: c.title, cardsCount: columnCards.length });
    });
    const columnColors = DEFAULT_COLUMNS.map((c) => c.color);
    return (_jsx("div", { className: "flex justify-center w-full h-full mt-5 my-auto", children: _jsx(ChartContainer, { config: chartConfig, className: "max-h-[600px]", children: _jsxs(BarChart, { accessibilityLayer: true, data: chartData, barSize: 80, children: [_jsx(XAxis, { dataKey: "columnName", type: "category", tickLine: true, tickMargin: 15, axisLine: false }), _jsx(YAxis, { type: "number", dataKey: "cardsCount", tickSize: 4, tickMargin: 6 }), _jsx(ChartTooltip, { cursor: false, content: _jsx(ChartTooltipContent, { hideLabel: true }) }), _jsx(Bar, { dataKey: "cardsCount", radius: 5, children: chartData.map((_, idx) => (_jsx(Cell, { fill: columnColors[idx] }, `cell-${idx}`))) })] }) }) }));
};
export default BoardChartView;
