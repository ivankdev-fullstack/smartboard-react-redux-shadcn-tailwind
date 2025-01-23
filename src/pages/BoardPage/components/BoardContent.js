import { jsx as _jsx } from "react/jsx-runtime";
import BoardKanbanView from "../views/BoardKanbanView/BoardKanbanView";
import BoardChartView from "../views/BoardChartView/BoardChartView";
const BoardContent = ({ boardView }) => {
    return (_jsx("div", { className: "h-full w-full bg-white rounded-l-xl px-4", children: boardView === "kanban" ? _jsx(BoardKanbanView, {}) : _jsx(BoardChartView, {}) }));
};
export default BoardContent;
