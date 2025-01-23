import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger, } from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger, } from "@/components/ui/popover";
import { useBoards } from "@/hooks/useBoards";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";
const BoardActionsPopover = ({ triggerContent, data }) => {
    const { handleUpdateBoard, handleDeleteBoard } = useBoards();
    const [isOpen, setIsOpen] = useState(false);
    const [boardName, setBoardName] = useState(data.name);
    const onDelete = () => handleDeleteBoard(data.id);
    return (_jsxs(Popover, { open: isOpen, onOpenChange: setIsOpen, children: [_jsx(PopoverTrigger, { onClick: (e) => e.stopPropagation(), children: triggerContent }), _jsxs(PopoverContent, { className: "bg-white p-2 w-64", onClick: (e) => e.stopPropagation(), children: [_jsx(Input, { className: "w-full rounded border-dashed text-sm", value: boardName, onChange: (e) => setBoardName(e.target.value), onKeyDown: (e) => {
                            if (e.key === "Enter") {
                                handleUpdateBoard(data.id, boardName);
                                setIsOpen(false);
                            }
                        } }), _jsx("hr", { className: "my-2" }), _jsxs(AlertDialog, { children: [_jsx(AlertDialogTrigger, { className: "w-full py-2 px-3 rounded hover:bg-border", children: _jsxs("div", { className: "flex items-center gap-3 text-sm font-bold ", children: [_jsx(FaTrash, { className: "mb-[-1px]", color: "red" }), "Delete Board"] }) }), _jsxs(AlertDialogContent, { children: [_jsxs(AlertDialogHeader, { children: [_jsx(AlertDialogTitle, { children: "Are you absolutely sure?" }), _jsx(AlertDialogDescription, { children: "This action cannot be undone. This will permanently delete your board and remove its data." })] }), _jsxs(AlertDialogFooter, { children: [_jsx(AlertDialogCancel, { children: "Cancel" }), _jsx(AlertDialogAction, { className: "text-white bg-primary-red", onClick: onDelete, children: "Delete" })] })] })] })] })] }));
};
export default BoardActionsPopover;
