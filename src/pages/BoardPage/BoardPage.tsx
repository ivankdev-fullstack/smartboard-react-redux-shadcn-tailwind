import { useState } from "react";
import BoardContent from "./components/BoardContent";
import BoardViewsBar from "./components/BoardViewsBar/BoardViewsBar";
import Navbar from "./components/Navbar";

export type BoardViewType = "kanban" | "chart";

const BoardPage = () => {
  const [boardView, setBoardView] = useState<BoardViewType>("kanban");
  document.body.style.overflow = "hidden";

  return (
    <div>
      <Navbar />
      <div className="flex h-screen w-full gap-0.5 mt-2">
        <BoardViewsBar boardView={boardView} setBoardView={setBoardView} />
        <BoardContent boardView={boardView} />
      </div>
    </div>
  );
};

export default BoardPage;
