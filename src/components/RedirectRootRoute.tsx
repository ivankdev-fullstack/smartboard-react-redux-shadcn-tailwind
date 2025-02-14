import { useUser } from "@/hooks/useUser";
import { Navigate } from "react-router-dom";

export const RedirectRootRoute = () => {
  const { user } = useUser();

  if (user?.id) {
    return <Navigate to="/boards" />;
  }

  return <Navigate to="/login" />;
};
