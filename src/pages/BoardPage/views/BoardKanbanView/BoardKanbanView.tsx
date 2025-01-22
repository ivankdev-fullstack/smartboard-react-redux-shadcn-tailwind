import { DEFAULT_COLUMNS } from "@/data";
import KanbanColumn from "./KanbanColumn";

const BoardKanbanView = () => {
  return (
    <div className="flex gap-5 h-full w-full pr-24 overflow-auto">
      {DEFAULT_COLUMNS.map((c) => (
        <KanbanColumn key={c.id} data={c} />
      ))}
    </div>
  );
};

export default BoardKanbanView;
