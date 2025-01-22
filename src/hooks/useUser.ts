import { logout, register, update } from "@/redux/actions/user";
import { AppDispatch, RootState } from "@/redux/store";
import { IUser } from "@/types";
import { useDispatch, useSelector } from "react-redux";

export const useUser = () => {
  const dispatch = useDispatch<AppDispatch>();

  const user = useSelector((state: RootState) => state.currentUser);

  const registerUser = (data: Omit<IUser, "id">) => {
    dispatch(register(data));
  };

  const updateUser = (id: string, data: Partial<IUser>) => {
    dispatch(update(id, data));
  };

  const logoutUser = () => {
    dispatch(logout());
  };

  return {
    user,
    registerUser,
    updateUser,
    logoutUser,
  };
};
