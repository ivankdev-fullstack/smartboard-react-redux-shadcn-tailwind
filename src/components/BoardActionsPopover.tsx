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
} from "@/components/ui/popover";
import { useBoards } from "@/hooks/useBoards";
import { IBoard } from "@/types";
import { ReactNode, useState } from "react";
import { FaTrash } from "react-icons/fa";

interface Props {
  triggerContent: ReactNode;
  data: IBoard;
}

const BoardActionsPopover = ({ triggerContent, data }: Props) => {
  const { handleUpdateBoard, handleDeleteBoard } = useBoards();
  const [isOpen, setIsOpen] = useState(false);
  const [boardName, setBoardName] = useState(data.name);

  const onDelete = () => handleDeleteBoard(data.id);

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger onClick={(e) => e.stopPropagation()}>
        {triggerContent}
      </PopoverTrigger>
      <PopoverContent
        className="bg-white p-2 w-64"
        onClick={(e) => e.stopPropagation()}
      >
        <Input
          className="w-full rounded border-dashed text-sm"
          value={boardName}
          onChange={(e) => setBoardName(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleUpdateBoard(data.id, boardName);
              setIsOpen(false);
            }
          }}
        />
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
              <AlertDialogAction
                className="text-white bg-primary-red"
                onClick={onDelete}
              >
                Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </PopoverContent>
    </Popover>
  );
};

export default BoardActionsPopover;
