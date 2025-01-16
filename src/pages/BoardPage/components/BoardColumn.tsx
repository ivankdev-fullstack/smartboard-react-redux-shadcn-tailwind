import { FaCirclePlus } from "react-icons/fa6";
import { DEFAULT_CARDS } from "../data";
import Card from "./Card";

interface Props {
  title?: string;
  color?: string;
  cards?: [];
}

const BoardColumn = ({ title, color }: Props) => {
  return (
    <div className="flex flex-col w-[280px] gap-3 shrink-0 py-3">
      {/* Heading */}
      <div className="flex items-center gap-1">
        <div
          style={{ backgroundColor: color }}
          className="text-[13px] font-bold text-white w-full text-center py-1 rounded"
        >
          {title}
        </div>
        {/* NOTE: we get this from hook (redux) */}
        <div className="px-3 text-sm text-column-fg">0</div>
      </div>
      {/* Content */}
      <div className="group bg-column-bg hover:pb-[33px] rounded-md">
        {/* Line */}
        <div className="bg-column-line w-full h-[7px] rounded-t-md"></div>
        {/* Cards */}
        <div className="flex flex-col gap-3 p-3">
          {DEFAULT_CARDS.map((c) => (
            <Card
              key={c.id}
              id={c.id}
              title={c.title}
              description={c.description}
            />
          ))}
        </div>
        <div className="relative text-[13px] text-column-fg text-center py-1">
          {!DEFAULT_CARDS.length && <p className="mb-3">No records</p>}
          <div className="my-2">
            <FaCirclePlus
              size={20}
              className="hidden absolute w-full bottom-[-13px] left-1/2 transform -translate-x-1/2 text-primary-blue cursor-pointer group-hover:block"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardColumn;
