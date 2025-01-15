import { createBrowserRouter } from "react-router-dom";
import BoardPage from "./pages/BoardPage/BoardPage";
import { BoardPageLayout } from "./pages/BoardPage/layout";
import BoardsPage from "./pages/BoardsPage/BoardsPage";
import { BoardsPageLayout } from "./pages/BoardsPage/layout";

export const router = createBrowserRouter([
  {
    path: "/boards",
    element: <BoardsPageLayout />,
    children: [{ index: true, element: <BoardsPage /> }],
  },
  {
    path: "/board",
    element: <BoardPageLayout />,
    children: [
      {
        path: ":id",
        element: <BoardPage />,
      },
    ],
  },
]);
