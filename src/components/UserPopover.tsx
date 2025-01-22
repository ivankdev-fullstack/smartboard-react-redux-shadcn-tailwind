import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover.tsx";
import { useUser } from "@/hooks/useUser";
import { FaCircleUser } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { RiShutDownLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

interface Props {
  arrowDropdownColor: string;
}

const UserPopover = ({ arrowDropdownColor }: Props) => {
  const { user, logoutUser } = useUser();
  const navigation = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigation("/login");
  };

  return (
    <div className="border-l px-4">
      <Popover>
        <PopoverTrigger className="flex justify-center items-center gap-3">
          <IoMdArrowDropdown color={arrowDropdownColor} className="mb-[-2px]" />
          <div className="text-sm text-left font-bold mr-4">
            {user.username}
          </div>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
          </Avatar>
        </PopoverTrigger>
        <PopoverContent className="bg-white p-2 w-64">
          <div className="flex items-center gap-3 text-sm w-full cursor-pointer py-2 px-3 rounded hover:bg-border">
            <FaCircleUser className="mb-[-1px]" />
            Personal information
          </div>
          <hr className="my-2" />
          <div
            className="flex items-center gap-3 text-sm font-bold w-full cursor-pointer py-2 px-3 rounded hover:bg-border"
            onClick={handleLogout}
          >
            <RiShutDownLine className="mb-[-1px]" color="red" />
            Logout
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default UserPopover;
