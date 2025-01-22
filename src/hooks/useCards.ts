import {
  addCard,
  AddCardPayload,
  deleteCard,
  updateCard,
} from "@/redux/actions/cards";
import { AppDispatch, RootState } from "@/redux/store";
import { ICard } from "@/types";
import { useDispatch, useSelector } from "react-redux";

export const useCards = () => {
  const dispatch = useDispatch<AppDispatch>();

  const getCardsByBoardAndColumn = (boardId: string, columnId: string) =>
    useSelector((state: RootState) =>
      state.cards.filter(
        (c) => c.boardId === boardId && c.columnId === columnId
      )
    );

  const handleAddCard = (data: AddCardPayload) => {
    dispatch(addCard(data));
  };

  const handleUpdateCard = (id: string, data: Partial<ICard>) => {
    dispatch(updateCard(id, data));
  };

  const handleDeleteCard = (id: string) => {
    dispatch(deleteCard(id));
  };

  return {
    getCardsByBoardAndColumn,
    handleAddCard,
    handleUpdateCard,
    handleDeleteCard,
  };
};
