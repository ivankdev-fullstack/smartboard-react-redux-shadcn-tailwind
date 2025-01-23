import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import BoardActionsPopover from "@/components/BoardActionsPopover";
import { FaGear } from "react-icons/fa6";
const BoardsGridItem = ({ headerContent, data, onClick }) => {
    return (_jsxs("div", { className: "group flex flex-col items-center w-[140px] min-h-[130px] h-full font-medium m-auto p-2 rounded-md hover:cursor-pointer gap-3 transition-all duration-200 hover:shadow-lg", onClick: onClick, children: [headerContent || (_jsx("div", { className: "relative w-[82px] h-[82px] bg-primary-blue rounded-md", children: _jsx(BoardActionsPopover, { data: data, triggerContent: _jsx("div", { className: "absolute hidden top-1 right-1 group-hover:block p-1", children: _jsx(FaGear, { color: "white", size: 15 }) }) }) })), _jsx("div", { className: "flex justify-center items-center text-center text-sm min-h-[60px]", children: data.name })] }));
};
export default BoardsGridItem;
