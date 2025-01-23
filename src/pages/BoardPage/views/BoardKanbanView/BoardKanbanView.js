import { jsx as _jsx } from "react/jsx-runtime";
import { DEFAULT_COLUMNS } from "@/data";
import KanbanColumn from "./KanbanColumn";
const BoardKanbanView = () => {
    return (_jsx("div", { className: "flex gap-5 h-full w-full pr-24 overflow-auto", children: DEFAULT_COLUMNS.map((c) => (_jsx(KanbanColumn, { data: c }, c.id))) }));
};
export default BoardKanbanView;
