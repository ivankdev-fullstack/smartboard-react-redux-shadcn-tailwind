import BoardContent from "./components/BoardContent";
import BoardViewActions from "./components/BoardViewActions";

const BoardPage = () => {
  return (
    <div className="flex flex-col h-screen w-full gap-0.5 mt-2 mx-1">
      <BoardViewActions />
      <BoardContent />
    </div>
  );
};

export default BoardPage;
