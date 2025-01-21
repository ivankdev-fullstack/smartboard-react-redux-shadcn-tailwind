import BoardPopover from "@/components/BoardPopover";
import { FaGear } from "react-icons/fa6";

const BoardsGridItem = () => {
  return (
    <div className="group flex flex-col justify-center items-center w-[140px] min-h-[130px] h-full font-medium m-auto rounded-md hover:cursor-pointer hover:shadow-md gap-2">
      <div className="relative w-[82px] h-[82px] bg-primary-blue rounded-md">
        <BoardPopover
          triggerContent={
            <div className="absolute hidden top-1 right-1 group-hover:block p-1">
              <FaGear color="white" size={15} />
            </div>
          }
        />
      </div>
      <div className="flex justify-center items-center text-center text-sm min-h-[70px] px-3 pb-5">
        Business Roadmap Lorem, ipsum dolor sit
      </div>
    </div>
  );
};

export default BoardsGridItem;
