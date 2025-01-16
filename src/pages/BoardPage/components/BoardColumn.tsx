import { FaCirclePlus } from "react-icons/fa6";

interface Props {
  title?: string;
  color?: string;
  cards?: [];
}

const BoardColumn = ({ title, color, cards }: Props) => {
  return (
    <div className="flex flex-col w-[280px] gap-3 shrink-0">
      <div className="flex items-center gap-1">
        <div
          style={{ backgroundColor: color }}
          className="text-[13px] font-bold text-white w-full text-center py-1 rounded"
        >
          {title}
        </div>
        <div className="px-3 text-sm text-column-fg">0</div>
      </div>
      <div className="group bg-column-bg hover:pb-[33px]">
        <div className="bg-column-line w-full h-[7px] rounded-t-md"></div>
        <div className="relative text-[13px] text-column-fg text-center py-4">
          No records
          <FaCirclePlus
            size={20}
            className="hidden absolute w-full bottom-[-13px] left-1/2 transform -translate-x-1/2 text-primary-blue cursor-pointer group-hover:block"
          />
        </div>
      </div>
    </div>
  );
};

export default BoardColumn;
