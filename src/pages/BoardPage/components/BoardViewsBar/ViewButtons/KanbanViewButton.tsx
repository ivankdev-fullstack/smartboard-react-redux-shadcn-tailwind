import { BoardViewType } from "@/pages/BoardPage/BoardPage";
import { MdViewKanban } from "react-icons/md";

interface Props {
  isActive: boolean;
  changeViewType: (type: BoardViewType) => void;
}

const KanbanViewButton = ({ isActive, changeViewType }: Props) => {
  return (
    <div
      className={`flex justify-center items-center group cursor-pointer w-[28px] h-[28px] rounded-md ${
        isActive
          ? "bg-primary-purple hover:opacity-80"
          : "hover:bg-primary-purple-light"
      }`}
      onClick={() => changeViewType("kanban")}
    >
      <MdViewKanban
        size="24px"
        className={`${
          isActive
            ? "text-white"
            : "text-primary-gray group-hover:text-primary-purple"
        }`}
      />
    </div>
  );
};

export default KanbanViewButton;
