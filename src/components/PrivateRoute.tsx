import { useUser } from "@/hooks/useUser";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ element }: { element: JSX.Element }) => {
  const { user } = useUser();

  if (!user.id) {
    return <Navigate to="/login" />;
  }

  return element;
};
