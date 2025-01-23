import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import BoardContent from "./components/BoardContent";
import BoardViewsBar from "./components/BoardViewsBar/BoardViewsBar";
import Navbar from "./components/Navbar";
const BoardPage = () => {
    const [boardView, setBoardView] = useState("kanban");
    document.body.style.overflow = "hidden";
    return (_jsxs("div", { children: [_jsx(Navbar, {}), _jsxs("div", { className: "flex h-screen w-full gap-0.5 mt-2", children: [_jsx(BoardViewsBar, { boardView: boardView, setBoardView: setBoardView }), _jsx(BoardContent, { boardView: boardView })] })] }));
};
export default BoardPage;
