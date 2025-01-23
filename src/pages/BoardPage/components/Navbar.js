import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import BoardActionsPopover from "@/components/BoardActionsPopover";
import UserPopover from "@/components/UserPopover";
import { useBoard } from "@/hooks/useBoard";
import { IoMdArrowDropdown } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import LightLogo from "../../../assets/lightLogo.png";
const Navbar = () => {
    const params = useParams();
    const boardId = params.id;
    const board = useBoard(boardId);
    const navigation = useNavigate();
    return (_jsxs("div", { className: "flex justify-between items-center h-[50px] text-white bg-primary-blue px-8", children: [_jsx("img", { className: "block max-h-[30px] px-4 cursor-pointer", src: LightLogo, alt: "logo", onClick: () => navigation("/boards") }), _jsx(BoardActionsPopover, { triggerContent: _jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "text-xl text-left font-bold", children: board.name }), _jsx(IoMdArrowDropdown, { className: "mb-[-2px]" })] }), data: { ...board } }), _jsx(UserPopover, { arrowDropdownColor: "white" })] }));
};
export default Navbar;
