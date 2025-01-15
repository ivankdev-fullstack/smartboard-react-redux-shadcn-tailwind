import { FaPlus } from "react-icons/fa6";

const AddNewBoardsGridItem = () => {
  return (
    <div className="group flex flex-col justify-center items-center min-w-[105px] min-h-[130px] h-full font-medium m-auto rounded-md hover:cursor-pointer hover:shadow-md gap-2">
      <div className="flex justify-center items-center w-[82px] h-[82px] rounded-md border border-dashed border-border-dark group-hover:border-primary-blue group-hover:bg-primary-blue-light">
        <FaPlus color="hsl(var(--primary-blue))" size={18} />
      </div>
      <div className="flex justify-center items-center text-center text-sm min-h-[70px] px-3">
        Add New Board
      </div>
    </div>
  );
};

export default AddNewBoardsGridItem;
