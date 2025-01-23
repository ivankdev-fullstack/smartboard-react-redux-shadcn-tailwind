import { addCard, deleteCard, updateCard, } from "@/redux/actions/cards";
import { useDispatch, useSelector } from "react-redux";
export const useCards = () => {
    const dispatch = useDispatch();
    const getCardsByBoardAndColumn = (boardId, columnId) => useSelector((state) => state.cards.filter((c) => c.boardId === boardId && c.columnId === columnId));
    const handleAddCard = (data) => {
        dispatch(addCard(data));
    };
    const handleUpdateCard = (id, data) => {
        dispatch(updateCard(id, data));
    };
    const handleDeleteCard = (id) => {
        dispatch(deleteCard(id));
    };
    return {
        getCardsByBoardAndColumn,
        handleAddCard,
        handleUpdateCard,
        handleDeleteCard,
    };
};
