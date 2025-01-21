import AddNewBoardsGridItem from "./AddNewBoardsGridItem";
import BoardsGridItem from "./BoardsGridItem";

const BoardsGrid = () => {
  return (
    <div className="flex flex-col">
      <div className="border-b text-xl font-medium py-2 mb-8">My Boards</div>
      <div className="grid grid-cols-5 gap-6">
        <AddNewBoardsGridItem />
        <BoardsGridItem />
        <BoardsGridItem />
        <BoardsGridItem />
        <BoardsGridItem />
        <BoardsGridItem />
        <BoardsGridItem />
        <BoardsGridItem />
        <BoardsGridItem />
      </div>
    </div>
  );
};

export default BoardsGrid;
