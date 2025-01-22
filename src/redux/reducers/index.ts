import { combineReducers } from "redux";
import { boardReducer } from "./boards";
import { cardReducer } from "./cards";
import { userReducer } from "./user";

export const rootReducer = combineReducers({
  boards: boardReducer,
  cards: cardReducer,
  currentUser: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
