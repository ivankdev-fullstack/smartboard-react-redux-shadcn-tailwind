import BoardActionsPopover from "@/components/BoardActionsPopover";
import UserPopover from "@/components/UserPopover";
import { useBoard } from "@/hooks/useBoard";
import { IBoard } from "@/types";
import { IoMdArrowDropdown } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import LightLogo from "../../../assets/lightLogo.png";

const Navbar = () => {
  const params = useParams();
  const boardId = params.id;
  const board = useBoard(boardId as string) as IBoard;
  const navigation = useNavigate();

  return (
    <div className="flex justify-between items-center h-[50px] text-white bg-primary-blue px-8">
      <img
        className="block max-h-[30px] px-4 cursor-pointer"
        src={LightLogo}
        alt="logo"
        onClick={() => navigation("/boards")}
      />
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
