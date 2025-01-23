import { IBoard } from "@/types";
import { BoardActionTypes } from "../actions/boards";
export declare const boardReducer: (state: IBoard[] | undefined, action: BoardActionTypes) => IBoard[];
