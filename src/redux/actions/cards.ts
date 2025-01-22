import { ICard } from "@/types";

// TYPES
export const ADD_CARD = "ADD_CARD";
export const UPDATE_CARD = "UPDATE_CARD";
export const DELETE_CARD = "DELETE_CARD";

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

export type CardActionTypes =
  | AddCardAction
  | UpdateCardAction
  | DeleteCardAction;

// FUNCS
export const addCard = (data: AddCardPayload): AddCardAction => ({
  type: ADD_CARD,
  payload: data,
});

export const updateCard = (
  id: string,
  data: Partial<ICard>
): UpdateCardAction => ({
  type: UPDATE_CARD,
  payload: { ...data, id },
});

export const deleteCard = (id: string): DeleteCardAction => ({
  type: DELETE_CARD,
  payload: { id },
});
