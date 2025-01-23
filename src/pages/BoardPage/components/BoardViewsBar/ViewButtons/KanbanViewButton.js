import { jsx as _jsx } from "react/jsx-runtime";
import { MdViewKanban } from "react-icons/md";
const KanbanViewButton = ({ isActive, changeViewType }) => {
    return (_jsx("div", { className: `flex justify-center items-center group cursor-pointer w-[28px] h-[28px] rounded-md transition-all duration-200 ${isActive
            ? "bg-primary-purple hover:opacity-80"
            : "hover:bg-primary-purple-light"}`, onClick: () => changeViewType("kanban"), children: _jsx(MdViewKanban, { size: "24px", className: `transition-all duration-200 ${isActive
                ? "text-white"
                : "text-primary-gray group-hover:text-primary-purple"}` }) }));
};
export default KanbanViewButton;
