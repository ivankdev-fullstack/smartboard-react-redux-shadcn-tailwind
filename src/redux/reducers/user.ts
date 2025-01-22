import { IUser } from "@/types";
import { v4 as uuidv4 } from "uuid";
import {
  LOGOUT,
  REGISTER,
  UPDATE_USER,
  UserActionTypes,
} from "../actions/user";

const initialState: IUser = {} as IUser;

export const userReducer = (
  state = initialState,
  action: UserActionTypes
): IUser => {
  switch (action.type) {
    case REGISTER:
      const id = uuidv4();

      return {
        ...action.payload,
        id,
      };
    case UPDATE_USER:
      if (!(state.id === action.payload.id)) {
        return state;
      }

      return { ...state, ...action.payload };
    case LOGOUT:
      return {} as IUser;
    default:
      return state;
  }
};
