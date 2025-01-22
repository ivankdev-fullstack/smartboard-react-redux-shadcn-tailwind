import { DEFAULT_CARDS } from "@/data";
import { ICard } from "@/types";
import { v4 as uuidv4 } from "uuid";
import {
  ADD_CARD,
  CardActionTypes,
  DELETE_CARD,
  UPDATE_CARD,
} from "../actions/cards";

const initialState: ICard[] = DEFAULT_CARDS;

export const cardReducer = (
  state = initialState,
  action: CardActionTypes
): ICard[] => {
  switch (action.type) {
    case ADD_CARD:
      const newCard = {
        id: uuidv4(),
        ...action.payload,
      };
      return [...state, newCard];
    case UPDATE_CARD:
      return state.map((card) => {
        if (card.id === action.payload.id) {
          return { ...card, ...action.payload };
        }
        return card;
      });
    case DELETE_CARD:
      return state.filter((card) => card.id !== action.payload.id);
    default:
      return state;
  }
};
