import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useCards } from "@/hooks/useCards";
import { useState } from "react";
import { FaCirclePlus } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import Card from "./Card";
import CardFormDialog from "./CardFormDialog";
const KanbanColumn = ({ data }) => {
    const params = useParams();
    const { getCardsByBoardAndColumn } = useCards();
    const cards = getCardsByBoardAndColumn(params.id, data.id);
    const [dialogState, setDialogState] = useState({
        isOpen: false,
        type: "create",
        selectedCard: null,
    });
    const handleUpdateCard = (card) => {
        setDialogState({
            isOpen: true,
            type: "update",
            selectedCard: card,
        });
    };
    const closeDialog = () => {
        setDialogState({
            isOpen: false,
            type: "create",
            selectedCard: null,
        });
    };
    return (_jsxs("div", { className: "flex flex-col w-[280px] gap-3 shrink-0 py-3", children: [_jsxs("div", { className: "flex items-center gap-1", children: [_jsx("div", { style: { backgroundColor: data.color }, className: "text-[13px] font-bold text-white w-full text-center py-1 rounded", children: data.title }), _jsx("div", { className: "px-3 text-sm text-column-fg", children: cards.length })] }), _jsxs("div", { className: "group bg-column-bg hover:pb-[28px] rounded-md transition-all duration-200", children: [_jsx("div", { className: "bg-column-line w-full h-[7px] rounded-t-md" }), _jsx("div", { className: "flex flex-col gap-3 p-3", children: cards?.map((c) => (_jsx(Card, { data: c, onClick: () => handleUpdateCard(c) }, c.id))) }), _jsxs("div", { className: "relative text-[13px] text-column-fg text-center", children: [!cards.length && _jsx("p", { className: "mb-3", children: "No records" }), _jsxs(Dialog, { open: dialogState.isOpen, onOpenChange: (open) => setDialogState((prev) => ({ ...prev, isOpen: open })), children: [_jsx(DialogTrigger, { children: _jsx(FaCirclePlus, { size: 20, className: "opacity-0 absolute w-full bottom-[5px] left-1/2 transform -translate-x-1/2 text-primary-blue cursor-pointer group-hover:block transition-all duration-200 ease-in-out group-hover:bottom-[-10px] group-hover:opacity-100" }) }), _jsx(DialogContent, { className: "max-w-[700px]", children: _jsx(CardFormDialog, { type: dialogState.type, parentColumn: data, cardData: dialogState.selectedCard, onClose: closeDialog }) })] })] })] })] }));
};
export default KanbanColumn;
