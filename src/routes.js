import { jsx as _jsx } from "react/jsx-runtime";
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
        element: _jsx(Layout, {}),
        errorElement: _jsx(NotFoundRoute, {}),
        children: [
            {
                path: "login",
                element: _jsx(LoginPage, {}),
            },
            {
                path: "signup",
                element: _jsx(SignUpPage, {}),
            },
            {
                path: "boards",
                element: _jsx(PrivateRoute, { element: _jsx(BoardsPage, {}) }),
            },
            {
                path: "board/:id",
                element: _jsx(PrivateRoute, { element: _jsx(BoardPage, {}) }),
            },
        ],
    },
]);
