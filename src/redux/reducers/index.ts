import { combineReducers } from "redux";
import { boardReducer } from "./boards";
import { cardReducer } from "./cards";

export const rootReducer = combineReducers({
  boards: boardReducer,
  cards: cardReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
