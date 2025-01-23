import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import UserPopover from "@/components/UserPopover";
import { useNavigate } from "react-router-dom";
import Logo from "../../../assets/darkLogo.png";
const Navbar = () => {
    const navigation = useNavigate();
    return (_jsxs("div", { className: "flex justify-between items-center h-[70px] bg-white text-primary-black border-b-4 border-primary-blue px-8", children: [_jsx("img", { className: "block max-h-[30px] px-4 cursor-pointer", src: Logo, alt: "logo", onClick: () => navigation("/boards") }), _jsx(UserPopover, { arrowDropdownColor: "hsl(var(--primary-black))" })] }));
};
export default Navbar;
