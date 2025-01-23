import { ICard } from "@/types";
export declare const ADD_CARD = "ADD_CARD";
export declare const UPDATE_CARD = "UPDATE_CARD";
export declare const DELETE_CARD = "DELETE_CARD";
export type AddCardPayload = Omit<ICard, "id">;
interface AddCardAction {
    type: typeof ADD_CARD;
    payload: AddCardPayload;
}
interface UpdateCardAction {
    type: typeof UPDATE_CARD;
    payload: Partial<ICard>;
}
interface DeleteCardAction {
    type: typeof DELETE_CARD;
    payload: Pick<ICard, "id">;
}
export type CardActionTypes = AddCardAction | UpdateCardAction | DeleteCardAction;
export declare const addCard: (data: AddCardPayload) => AddCardAction;
export declare const updateCard: (id: string, data: Partial<ICard>) => UpdateCardAction;
export declare const deleteCard: (id: string) => DeleteCardAction;
export {};
