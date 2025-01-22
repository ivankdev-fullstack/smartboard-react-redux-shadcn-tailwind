import { useState } from "react";
import BoardContent from "./components/BoardContent";
import BoardViewsBar from "./components/BoardViewsBar/BoardViewsBar";

export type BoardViewType = "kanban" | "chart";

const BoardPage = () => {
  const [boardView, setBoardView] = useState<BoardViewType>("kanban");
  document.body.style.overflow = "hidden";

  return (
    <div className="flex h-screen w-full gap-0.5 mt-2">
      <BoardViewsBar boardView={boardView} setBoardView={setBoardView} />
      <BoardContent boardView={boardView} />
    </div>
  );
};

export default BoardPage;
