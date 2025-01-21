import BoardActionsPopover from "@/components/BoardActionsPopover";
import { IBoard } from "@/types";
import { ReactNode } from "react";
import { FaGear } from "react-icons/fa6";

interface Props {
  headerContent?: ReactNode;
  data: Partial<IBoard> | IBoard;
  onClick: (...props: any) => void;
}

const BoardsGridItem = ({ headerContent, data, onClick }: Props) => {
  return (
    <div
      className="group flex flex-col items-center w-[140px] min-h-[130px] h-full font-medium m-auto p-2 rounded-md hover:cursor-pointer hover:shadow-lg gap-3"
      onClick={onClick}
    >
      {headerContent || (
        <div className="relative w-[82px] h-[82px] bg-primary-blue rounded-md">
          <BoardActionsPopover
            data={data as IBoard}
            triggerContent={
              <div className="absolute hidden top-1 right-1 group-hover:block p-1">
                <FaGear color="white" size={15} />
              </div>
            }
          />
        </div>
      )}

      <div className="flex justify-center items-center text-center text-sm min-h-[60px]">
        {data.name}
      </div>
    </div>
  );
};

export default BoardsGridItem;
