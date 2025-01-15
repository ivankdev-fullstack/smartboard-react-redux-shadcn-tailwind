import UserPopover from "@/components/UserPopover";

import BoardPopover from "@/components/BoardPopover";
import { IoMdArrowDropdown } from "react-icons/io";
import LightLogo from "../../../assets/lightLogo.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-[50px] text-white bg-primary-blue px-8">
      <img className="block max-h-[30px] px-4" src={LightLogo} alt="logo" />
      <BoardPopover
        triggerContent={
          <div className="flex items-center gap-3">
            <div className="text-xl text-left font-bold">Trip plans</div>
            <IoMdArrowDropdown className="mb-[-2px]" />
          </div>
        }
      />
      <UserPopover arrowDropdownColor="white" />
    </div>
  );
};

export default Navbar;
