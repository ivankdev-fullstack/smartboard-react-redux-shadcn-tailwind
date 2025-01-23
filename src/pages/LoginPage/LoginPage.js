import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import DarkLogo from "@/assets/darkLogo.png";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useUser } from "@/hooks/useUser";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as z from "zod";
const formSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
});
const LoginPage = () => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });
    const navigation = useNavigate();
    const { registerUser } = useUser();
    const handleSubmit = (data) => {
        registerUser({ ...data, username: "John Doe" });
        navigation("/boards");
    };
    return (_jsx("div", { className: "flex flex-col justify-center items-center h-screen w-full bg-white", children: _jsxs(Card, { className: "relative w-full max-w-sm bg-white", children: [_jsx("img", { src: DarkLogo, className: "absolute h-12 top-[-60px] left-1/2 -translate-x-1/2" }), _jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Welcome back!" }), _jsx(CardDescription, { children: "Sign in to your SmartBoard account" })] }), _jsx(CardContent, { children: _jsx(Form, { ...form, children: _jsxs("form", { className: "flex flex-col gap-8", onSubmit: form.handleSubmit(handleSubmit), children: [_jsx(FormField, { control: form.control, name: "email", render: ({ field }) => (_jsxs(FormItem, { children: [_jsx(FormLabel, { children: "Email" }), _jsx(FormControl, { children: _jsx(Input, { placeholder: "john@doe.com", ...field }) }), _jsx(FormMessage, {})] })) }), _jsx(FormField, { control: form.control, name: "password", render: ({ field }) => (_jsxs(FormItem, { children: [_jsx(FormLabel, { children: "Password" }), _jsx(FormControl, { children: _jsx(Input, { type: "password", placeholder: "Password", ...field }) }), _jsx(FormMessage, {})] })) }), _jsx(Button, { className: "bg-primary-blue text-white mt-2", children: "Sign in" })] }) }) }), _jsxs(CardFooter, { className: "justify-between", children: [_jsx("small", { children: "Don't have an account?" }), _jsx(Button, { variant: "outline", size: "sm", onClick: () => navigation("/signup"), children: "Sign up" })] })] }) }));
};
export default LoginPage;
