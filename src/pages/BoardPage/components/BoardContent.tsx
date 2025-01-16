import { FaCirclePlus } from "react-icons/fa6";
import { DEFAULT_COLUMNS } from "../data";
import BoardColumn from "./BoardColumn";

const BoardContent = () => {
  return (
    <div className="flex gap-5 h-full w-full overflow-scroll bg-white pl-5 pr-20">
      {DEFAULT_COLUMNS.map((c) => (
        <BoardColumn key={c.id} title={c.title} color={c.color} />
      ))}
      <div className="group w-full h-full p-4 cursor-pointer">
        <FaCirclePlus
          size={20}
          className="text-column-line group-hover:text-primary-blue"
        />
      </div>
    </div>
  );
};

export default BoardContent;
