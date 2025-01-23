import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ChartViewButton from "./ViewButtons/ChartViewButton";
import KanbanViewButton from "./ViewButtons/KanbanViewButton";
const BoardViewsBar = ({ boardView, setBoardView }) => {
    const changeViewType = (type) => setBoardView(type);
    return (_jsxs("div", { className: "flex flex-col gap-2 items-center bg-white rounded-r-xl p-2", children: [_jsx("div", { className: "bg-border-dark w-full h-[1px] my-3" }), _jsx(KanbanViewButton, { isActive: boardView === "kanban", changeViewType: changeViewType }), _jsx(ChartViewButton, { isActive: boardView === "chart", changeViewType: changeViewType })] }));
};
export default BoardViewsBar;
