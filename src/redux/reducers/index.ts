import { combineReducers } from "redux";
import { boardReducer } from "./boards";

export const rootReducer = combineReducers({
  boards: boardReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
