import { IBoard } from "@/types";
export declare const ADD_BOARD = "ADD_BOARD";
export declare const UPDATE_BOARD = "UPDATE_BOARD";
export declare const DELETE_BOARD = "DELETE_BOARD";
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
export type BoardActionTypes = AddBoardAction | UpdateBoardAction | DeleteBoardAction;
export declare const addBoard: (userId: string) => AddBoardAction;
export declare const updateBoard: (id: string, data: Partial<IBoard>) => UpdateBoardAction;
export declare const deleteBoard: (id: string) => DeleteBoardAction;
export {};
