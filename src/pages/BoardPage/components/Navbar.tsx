import UserPopover from "@/components/UserPopover/UserPopover";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover.tsx";
import { FaTrash } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import LightLogo from "../../../assets/lightLogo.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-[50px] text-white bg-primary-blue px-8">
      <img className="block max-h-[30px] px-4" src={LightLogo} alt="logo" />
      <Popover>
        <PopoverTrigger className="flex items-center gap-3">
          <div className="text-xl text-left font-bold">Trip plans</div>
          <IoMdArrowDropdown className="mb-[-2px]" />
        </PopoverTrigger>
        <PopoverContent className="bg-white p-2 w-64">
          <Input className="w-full rounded border-dashed text-sm" />
          <hr className="my-2" />
          <AlertDialog>
            <AlertDialogTrigger className="w-full py-2 px-3 rounded hover:bg-border">
              <div className="flex items-center gap-3 text-sm font-bold ">
                <FaTrash className="mb-[-1px]" color="red" />
                Delete Board
              </div>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  your board and remove its data.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </PopoverContent>
      </Popover>
      <div className="border-l px-4">
        <UserPopover arrowDropdownColor="white" />
      </div>
    </div>
  );
};

export default Navbar;
