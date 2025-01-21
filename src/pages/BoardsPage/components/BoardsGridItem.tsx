import BoardPopover from "@/components/BoardPopover";
import { ReactNode } from "react";
import { FaGear } from "react-icons/fa6";

interface Props {
  headerContent?: ReactNode;
  text: string;
}

const BoardsGridItem = ({ headerContent, text }: Props) => {
  return (
    <div className="group flex flex-col items-center w-[140px] min-h-[130px] h-full font-medium m-auto rounded-md hover:cursor-pointer hover:shadow-lg gap-3">
      {headerContent || (
        <div className="relative w-[82px] h-[82px] bg-primary-blue rounded-md">
          <BoardPopover
            triggerContent={
              <div className="absolute hidden top-1 right-1 group-hover:block p-1">
                <FaGear color="white" size={15} />
              </div>
            }
          />
        </div>
      )}

      <div className="flex justify-center items-center text-center text-sm min-h-[70px] px-3 pb-5">
        {text}
      </div>
    </div>
  );
};

export default BoardsGridItem;
