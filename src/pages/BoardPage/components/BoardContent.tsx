import { FaCirclePlus } from "react-icons/fa6";
import { DEFAULT_COLUMNS } from "../data";
import BoardColumn from "./BoardColumn";

const BoardContent = () => {
  return (
    <div className="flex gap-7 h-full w-full overflow-scroll bg-white px-5 py-3.5">
      {DEFAULT_COLUMNS.map((c) => (
        <BoardColumn key={c.id} title={c.title} color={c.color} />
      ))}
      <FaCirclePlus
        size={24}
        className="text-column-line cursor-pointer p-0.5 mt-0.5 hover:text-primary-blue"
      />
    </div>
  );
};

export default BoardContent;
