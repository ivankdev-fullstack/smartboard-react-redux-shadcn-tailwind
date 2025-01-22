import { IUser } from "@/types";

// TYPES
export const REGISTER = "REGISTER";
export const UPDATE_USER = "UPDATE_USER";
export const LOGOUT = "LOGOUT";

interface RegisterAction {
  type: typeof REGISTER;
  payload: Omit<IUser, "id">;
}

interface UpdateUserAction {
  type: typeof UPDATE_USER;
  payload: { id: string; data: Partial<IUser> };
}

interface LogoutAction {
  type: typeof LOGOUT;
}

export type UserActionTypes = RegisterAction | UpdateUserAction | LogoutAction;

// FUNCS
export const register = (data: Omit<IUser, "id">): RegisterAction => ({
  type: REGISTER,
  payload: data,
});

export const update = (id: string, data: Partial<IUser>): UpdateUserAction => ({
  type: UPDATE_USER,
  payload: { id, data },
});

export const logout = (): LogoutAction => ({
  type: LOGOUT,
});
