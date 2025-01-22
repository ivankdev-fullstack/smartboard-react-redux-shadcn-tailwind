import { BoardViewType } from "../../BoardPage";
import ChartViewButton from "./ViewButtons/ChartViewButton";
import KanbanViewButton from "./ViewButtons/KanbanViewButton";

interface Props {
  boardView: BoardViewType;
  setBoardView: (prop: BoardViewType) => void;
}

const BoardViewsBar = ({ boardView, setBoardView }: Props) => {
  const changeViewType = (type: BoardViewType) => setBoardView(type);

  return (
    <div className="flex flex-col gap-2 items-center bg-white rounded-r-xl p-2">
      <div className="bg-border-dark w-full h-[1px] my-3"></div>
      <KanbanViewButton
        isActive={boardView === "kanban"}
        changeViewType={changeViewType}
      />
      <ChartViewButton
        isActive={boardView === "chart"}
        changeViewType={changeViewType}
      />
    </div>
  );
};

export default BoardViewsBar;
