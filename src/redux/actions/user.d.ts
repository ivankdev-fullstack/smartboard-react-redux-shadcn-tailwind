import { IUser } from "@/types";
export declare const REGISTER = "REGISTER";
export declare const UPDATE_USER = "UPDATE_USER";
export declare const LOGOUT = "LOGOUT";
interface RegisterAction {
    type: typeof REGISTER;
    payload: Omit<IUser, "id">;
}
interface UpdateUserAction {
    type: typeof UPDATE_USER;
    payload: {
        id: string;
        data: Partial<IUser>;
    };
}
interface LogoutAction {
    type: typeof LOGOUT;
}
export type UserActionTypes = RegisterAction | UpdateUserAction | LogoutAction;
export declare const register: (data: Omit<IUser, "id">) => RegisterAction;
export declare const update: (id: string, data: Partial<IUser>) => UpdateUserAction;
export declare const logout: () => LogoutAction;
export {};
