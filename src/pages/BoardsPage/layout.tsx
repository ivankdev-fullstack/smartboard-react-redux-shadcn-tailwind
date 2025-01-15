import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

export const BoardsPageLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
