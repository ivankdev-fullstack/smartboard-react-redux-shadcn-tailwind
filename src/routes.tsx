import { createBrowserRouter } from "react-router-dom";
import { NotFoundRoute } from "./components/NotFoundRoute";
import { PrivateRoute } from "./components/PrivateRoute";
import Layout from "./layout";
import BoardPage from "./pages/BoardPage/BoardPage";
import BoardsPage from "./pages/BoardsPage/BoardsPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundRoute />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <SignUpPage />,
      },
      {
        path: "/boards",
        element: <PrivateRoute element={<BoardsPage />} />,
      },
      {
        path: "/board/:id",
        element: <PrivateRoute element={<BoardPage />} />,
      },
    ],
  },
]);
