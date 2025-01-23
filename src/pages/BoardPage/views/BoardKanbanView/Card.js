import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Card = ({ data, onClick }) => {
    return (_jsxs("div", { className: "flex flex-col gap-1 rounded-md border border-border px-3.5 py-2.5 bg-white cursor-pointer", onClick: onClick, children: [_jsx("div", { className: "font-bold", children: data.title }), _jsx("div", { className: "text-sm", children: data?.description })] }));
};
export default Card;
