import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Popover, PopoverContent, PopoverTrigger, } from "@/components/ui/popover";
import { useUser } from "@/hooks/useUser";
import { FaCircleUser } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { RiShutDownLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
const UserPopover = ({ arrowDropdownColor }) => {
    const { user, logoutUser } = useUser();
    const navigation = useNavigate();
    const handleLogout = () => {
        logoutUser();
        navigation("/login");
    };
    return (_jsx("div", { className: "border-l px-4", children: _jsxs(Popover, { children: [_jsxs(PopoverTrigger, { className: "flex justify-center items-center gap-3", children: [_jsx(IoMdArrowDropdown, { color: arrowDropdownColor, className: "mb-[-2px]" }), _jsx("div", { className: "text-sm text-left font-bold mr-4", children: user.username }), _jsx(Avatar, { children: _jsx(AvatarImage, { src: "https://github.com/shadcn.png" }) })] }), _jsxs(PopoverContent, { className: "bg-white p-2 w-64", children: [_jsxs("div", { className: "flex items-center gap-3 text-sm w-full cursor-pointer py-2 px-3 rounded hover:bg-border", children: [_jsx(FaCircleUser, { className: "mb-[-1px]" }), "Personal information"] }), _jsx("hr", { className: "my-2" }), _jsxs("div", { className: "flex items-center gap-3 text-sm font-bold w-full cursor-pointer py-2 px-3 rounded hover:bg-border", onClick: handleLogout, children: [_jsx(RiShutDownLine, { className: "mb-[-1px]", color: "red" }), "Logout"] })] })] }) }));
};
export default UserPopover;
