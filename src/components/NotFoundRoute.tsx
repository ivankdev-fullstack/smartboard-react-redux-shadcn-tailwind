import { useUser } from "@/hooks/useUser";
import { Navigate } from "react-router-dom";

export const NotFoundRoute = () => {
  const { user } = useUser();

  if (!user.id) {
    return <Navigate to="/login" />;
  }

  return <Navigate to="/boards" />;
};
