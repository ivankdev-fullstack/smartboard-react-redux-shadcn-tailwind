import BoardActionsPopover from "@/components/BoardActionsPopover";
import UserPopover from "@/components/UserPopover";
import { useBoard } from "@/hooks/useBoard";
import { IBoard } from "@/types";
import { IoMdArrowDropdown } from "react-icons/io";
import { useParams } from "react-router-dom";
import LightLogo from "../../../assets/lightLogo.png";

const Navbar = () => {
  const params = useParams();
  const boardId = params.id;
  const board = useBoard(boardId as string) as IBoard;

  return (
    <div className="flex justify-between items-center h-[50px] text-white bg-primary-blue px-8">
      <img className="block max-h-[30px] px-4" src={LightLogo} alt="logo" />
      <BoardActionsPopover
        triggerContent={
          <div className="flex items-center gap-3">
            <div className="text-xl text-left font-bold">{board.name}</div>
            <IoMdArrowDropdown className="mb-[-2px]" />
          </div>
        }
        data={{ ...board }}
      />
      <UserPopover arrowDropdownColor="white" />
    </div>
  );
};

export default Navbar;
