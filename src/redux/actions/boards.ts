import { IBoard } from "@/types";

// TYPES
export const ADD_BOARD = "ADD_BOARD";
export const UPDATE_BOARD = "UPDATE_BOARD";
export const DELETE_BOARD = "DELETE_BOARD";

interface AddBoardAction {
  type: typeof ADD_BOARD;
  payload: Pick<IBoard, "userId">;
}

interface UpdateBoardAction {
  type: typeof UPDATE_BOARD;
  payload: Partial<IBoard>;
}

interface DeleteBoardAction {
  type: typeof DELETE_BOARD;
  payload: Pick<IBoard, "id">;
}

export type BoardActionTypes =
  | AddBoardAction
  | UpdateBoardAction
  | DeleteBoardAction;

// FUNCS
export const addBoard = (userId: string): AddBoardAction => ({
  type: ADD_BOARD,
  payload: { userId },
});

export const updateBoard = (
  id: string,
  data: Partial<IBoard>
): UpdateBoardAction => ({
  type: UPDATE_BOARD,
  payload: { ...data, id },
});

export const deleteBoard = (id: string): DeleteBoardAction => ({
  type: DELETE_BOARD,
  payload: { id },
});
