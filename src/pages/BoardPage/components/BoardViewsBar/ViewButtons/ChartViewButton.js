import { jsx as _jsx } from "react/jsx-runtime";
import { FaChartArea } from "react-icons/fa";
const ChartViewButton = ({ isActive, changeViewType }) => {
    return (_jsx("div", { className: `flex justify-center items-center group cursor-pointer w-[28px] h-[28px] rounded-md transition-all duration-200 ${isActive
            ? "bg-primary-pink hover:opacity-80"
            : "hover:bg-primary-pink-light"}`, onClick: () => changeViewType("chart"), children: _jsx(FaChartArea, { size: "18px", className: `transition-all duration-200 ${isActive
                ? "text-white"
                : "text-primary-gray group-hover:text-primary-pink"}` }) }));
};
export default ChartViewButton;
