import { ICard } from "@/types";
import { CardActionTypes } from "../actions/cards";
export declare const cardReducer: (state: ICard[] | undefined, action: CardActionTypes) => ICard[];
