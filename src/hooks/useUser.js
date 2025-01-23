import { logout, register, update } from "@/redux/actions/user";
import { useDispatch, useSelector } from "react-redux";
export const useUser = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.currentUser);
    const registerUser = (data) => {
        dispatch(register(data));
    };
    const updateUser = (id, data) => {
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
