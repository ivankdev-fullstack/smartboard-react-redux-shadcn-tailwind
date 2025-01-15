import { createBrowserRouter } from "react-router-dom";
import BoardsPage from "./pages/BoardsPage/BoardsPage";
import { Layout } from "./pages/BoardsPage/layout";

export const router = createBrowserRouter([
  {
    path: "/boards",
    element: <Layout />,
    children: [{ index: true, element: <BoardsPage /> }],
  },
]);
