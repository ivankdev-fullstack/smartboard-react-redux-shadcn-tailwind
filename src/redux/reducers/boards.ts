import { IBoard } from "@/types";
import { v4 as uuidv4 } from "uuid";
import {
  ADD_BOARD,
  BoardActionTypes,
  DELETE_BOARD,
  UPDATE_BOARD,
} from "../actions/boards";

const initialState: IBoard[] = [
  {
    id: "1",
    name: "Untitled Board 1",
  },
  {
    id: "2",
    name: "Untitled Board 2",
  },
  {
    id: "3",
    name: "Untitled Board 3",
  },
];

export const boardReducer = (
  state = initialState,
  action: BoardActionTypes
): IBoard[] => {
  switch (action.type) {
    case ADD_BOARD:
      const newBoard = {
        id: uuidv4(),
        name: "Untitled Board",
        userId: action.payload.userId,
      };
      return [...state, newBoard];
    case UPDATE_BOARD:
      return state.map((board) => {
        if (board.id === action.payload.id) {
          return { ...board, ...action.payload };
        }
        return board;
      });
    case DELETE_BOARD:
      return state.filter((board) => board.id !== action.payload.id);
    default:
      return state;
  }
};
