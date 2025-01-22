import { BoardViewType } from "@/pages/BoardPage/BoardPage";
import { FaChartArea } from "react-icons/fa";

interface Props {
  isActive: boolean;
  changeViewType: (type: BoardViewType) => void;
}

const ChartViewButton = ({ isActive, changeViewType }: Props) => {
  return (
    <div
      className={`flex justify-center items-center group cursor-pointer w-[28px] h-[28px] rounded-md ${
        isActive
          ? "bg-primary-pink hover:opacity-80"
          : "hover:bg-primary-pink-light"
      }`}
      onClick={() => changeViewType("chart")}
    >
      <FaChartArea
        size="18px"
        className={`${
          isActive
            ? "text-white"
            : "text-primary-gray group-hover:text-primary-pink"
        }`}
      />
    </div>
  );
};

export default ChartViewButton;
