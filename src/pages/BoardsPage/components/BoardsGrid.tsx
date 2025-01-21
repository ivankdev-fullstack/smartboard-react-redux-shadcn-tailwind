import { DEFAULT_BOARDS } from "@/data";
import { FaPlus } from "react-icons/fa6";
import BoardsGridItem from "./BoardsGridItem";

const BoardsGrid = () => {
  return (
    <div className="flex flex-col">
      <div className="border-b text-xl font-medium py-2 mb-8">My Boards</div>
      <div className="grid grid-cols-5 gap-6">
        <BoardsGridItem
          headerContent={
            <div className="flex justify-center items-center w-[82px] h-[82px] rounded-md border border-dashed border-border-dark group-hover:border-primary-blue group-hover:bg-primary-blue-light">
              <FaPlus color="hsl(var(--primary-blue))" size={18} />
            </div>
          }
          text="Add New Board"
        />
        {DEFAULT_BOARDS.map((b) => (
          <BoardsGridItem key={b.id} text={b.name} />
        ))}
      </div>
    </div>
  );
};

export default BoardsGrid;
