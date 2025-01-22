import { BoardViewType } from "../BoardPage";
import BoardKanbanView from "../views/BoardKanbanView/BoardKanbanView";
import BoardChartView from "../views/BoardChartView/BoardChartView";

interface Props {
  boardView: BoardViewType;
}

const BoardContent = ({ boardView }: Props) => {
  return (
    <div className="h-full w-full bg-white rounded-l-xl px-4">
      {boardView === "kanban" ? <BoardKanbanView /> : <BoardChartView />}
    </div>
  );
};

export default BoardContent;
