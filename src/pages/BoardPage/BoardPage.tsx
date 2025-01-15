import BoardContent from "./components/BoardContent";
import BoardViewActions from "./components/BoardViewActions";

const BoardPage = () => {
  return (
    <div className="flex flex-col gap-0.5 my-2 mx-1">
      <BoardViewActions />
      <BoardContent />
    </div>
  );
};

export default BoardPage;
