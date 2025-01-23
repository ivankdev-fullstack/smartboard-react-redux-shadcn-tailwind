import { jsx as _jsx } from "react/jsx-runtime";
import { useUser } from "@/hooks/useUser";
import { Navigate } from "react-router-dom";
export const PrivateRoute = ({ element }) => {
    const { user } = useUser();
    if (!user.id) {
        return _jsx(Navigate, { to: "/login" });
    }
    return element;
};
