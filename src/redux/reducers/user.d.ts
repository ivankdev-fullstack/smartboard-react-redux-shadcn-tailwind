import { IUser } from "@/types";
import { UserActionTypes } from "../actions/user";
export declare const userReducer: (state: IUser | undefined, action: UserActionTypes) => IUser;
