import { useBoards } from "@/hooks/useBoards";
import { FaPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import BoardsGridItem from "./BoardsGridItem";

const BoardsGrid = () => {
  const { boards, handleAddBoard } = useBoards();
  const navigate = useNavigate();

  const redirectToBoardPage = (boardId: string) =>
    navigate(`/board/${boardId}`);

  const createNewBoard = async () => {
    handleAddBoard("userId");
  };

  return (
    <div className="flex flex-col">
      <div className="border-b text-xl font-medium py-2 mb-8">My Boards</div>
      <div className="grid grid-cols-5 gap-6">
        <BoardsGridItem
          headerContent={
            <div className="flex justify-center items-center w-[82px] h-[82px] rounded-md border border-dashed border-border-dark group-hover:border-primary-blue group-hover:bg-primary-blue-light transition-all duration-200">
              <FaPlus color="hsl(var(--primary-blue))" size={18} />
            </div>
          }
          data={{ name: "Add New Board" }}
          onClick={createNewBoard}
        />
        {boards?.map((b) => (
          <BoardsGridItem
            key={b.id}
            data={b}
            onClick={() => redirectToBoardPage(b.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default BoardsGrid;
