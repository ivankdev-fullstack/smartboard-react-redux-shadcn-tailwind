import { AddCardPayload } from "@/redux/actions/cards";
import { ICard } from "@/types";
export declare const useCards: () => {
    getCardsByBoardAndColumn: (boardId: string, columnId: string) => ICard[];
    handleAddCard: (data: AddCardPayload) => void;
    handleUpdateCard: (id: string, data: Partial<ICard>) => void;
    handleDeleteCard: (id: string) => void;
};
