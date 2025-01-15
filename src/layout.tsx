import { Outlet } from "react-router-dom";
import Navbar from "./pages/BoardPage/components/Navbar";

export const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
