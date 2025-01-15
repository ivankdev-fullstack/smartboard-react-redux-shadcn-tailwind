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
import { ReactNode } from "react";
import { FaTrash } from "react-icons/fa";

interface Props {
  triggerContent: ReactNode;
}

const BoardPopover = ({ triggerContent }: Props) => {
  return (
    <Popover>
      <PopoverTrigger>{triggerContent}</PopoverTrigger>
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
                This action cannot be undone. This will permanently delete your
                board and remove its data.
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
  );
};

export default BoardPopover;
