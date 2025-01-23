import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import BoardsGrid from "./components/BoardsGrid";
import Navbar from "./components/Navbar";
const BoardsPage = () => {
    return (_jsxs("div", { className: "min-h-screen bg-white", children: [_jsx(Navbar, {}), _jsx("div", { className: "my-0 mx-auto pt-10 pb-32 w-3/4", children: _jsx(BoardsGrid, {}) })] }));
};
export default BoardsPage;
