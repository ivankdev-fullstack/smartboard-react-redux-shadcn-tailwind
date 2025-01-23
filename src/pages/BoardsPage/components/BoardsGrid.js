import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useBoards } from "@/hooks/useBoards";
import { FaPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import BoardsGridItem from "./BoardsGridItem";
const BoardsGrid = () => {
    const { boards, handleAddBoard } = useBoards();
    const navigate = useNavigate();
    const redirectToBoardPage = (boardId) => navigate(`/board/${boardId}`);
    const createNewBoard = async () => {
        handleAddBoard("userId");
    };
    return (_jsxs("div", { className: "flex flex-col", children: [_jsx("div", { className: "border-b text-xl font-medium py-2 mb-8", children: "My Boards" }), _jsxs("div", { className: "grid grid-cols-5 gap-6", children: [_jsx(BoardsGridItem, { headerContent: _jsx("div", { className: "flex justify-center items-center w-[82px] h-[82px] rounded-md border border-dashed border-border-dark group-hover:border-primary-blue group-hover:bg-primary-blue-light transition-all duration-200", children: _jsx(FaPlus, { color: "hsl(var(--primary-blue))", size: 18 }) }), data: { name: "Add New Board" }, onClick: createNewBoard }), boards?.map((b) => (_jsx(BoardsGridItem, { data: b, onClick: () => redirectToBoardPage(b.id) }, b.id)))] })] }));
};
export default BoardsGrid;
