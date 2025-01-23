import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "@/components/ui/button";
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { DEFAULT_COLUMN_TYPES, DEFAULT_COLUMNS } from "@/data";
import { useCards } from "@/hooks/useCards";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import * as z from "zod";
const formSchema = z.object({
    title: z.string().min(1),
    description: z.string().max(200).optional(),
    status: z.enum(Object.values(DEFAULT_COLUMN_TYPES), {
        message: "Status must be selected",
    }),
});
const CardFormDialog = ({ type, parentColumn, onClose, cardData }) => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: cardData?.title || "",
            description: cardData?.description || "",
            status: parentColumn.type,
        },
    });
    const [selectedStatus, setSelectedStatus] = useState(parentColumn);
    const params = useParams();
    const boardId = params.id;
    const { handleAddCard, handleUpdateCard, handleDeleteCard } = useCards();
    const onStatusSelect = (value) => {
        const newStatus = DEFAULT_COLUMNS.find((c) => c.type === value);
        if (newStatus)
            setSelectedStatus(newStatus);
    };
    const onSubmit = (data) => {
        if (type === "create") {
            handleAddCard({ ...data, boardId, columnId: selectedStatus.id });
        }
        if (type === "update") {
            handleUpdateCard(cardData.id, {
                ...data,
                boardId,
                columnId: selectedStatus.id,
            });
        }
        onClose();
    };
    const onDeleteCard = () => handleDeleteCard(cardData.id);
    return (_jsxs(DialogHeader, { children: [_jsx(DialogTitle, { className: "mb-5 pb-3 border-b-[1px] border-border", children: type === "create" ? "Create new card" : "Update card" }), _jsx("div", { children: _jsx(Form, { ...form, children: _jsxs("form", { onSubmit: form.handleSubmit(onSubmit), className: "flex flex-wrap w-full gap-10", children: [_jsx(FormField, { control: form.control, name: "title", render: ({ field }) => (_jsxs(FormItem, { className: "flex-[1_1_calc(50%-1.5rem)]", children: [_jsx(FormLabel, { children: "Title" }), _jsx(FormControl, { children: _jsx(Input, { placeholder: "Enter title", ...field }) }), _jsx(FormMessage, {})] })) }), _jsx(FormField, { control: form.control, name: "status", render: ({ field }) => (_jsxs(FormItem, { className: "flex-[1_1_calc(50%-1.5rem)]", children: [_jsx(FormLabel, { children: "Status" }), _jsx(FormControl, { children: _jsxs(Select, { value: selectedStatus.type, onValueChange: (value) => {
                                                    field.onChange(value);
                                                    onStatusSelect(value);
                                                }, children: [_jsx(SelectTrigger, { className: "text-column-fg", style: {
                                                            justifyContent: "center",
                                                            backgroundColor: selectedStatus?.color,
                                                            color: "white",
                                                            fontWeight: "bold",
                                                        }, children: _jsx(SelectValue, { placeholder: "Select Status" }) }), _jsx(SelectContent, { className: "bg-white", children: _jsx("div", { className: "flex flex-col gap-1", children: DEFAULT_COLUMNS.map((c) => (_jsx(SelectItem, { value: c.type, className: "justify-center text-white font-bold text-[13px]", style: { background: c.color }, children: c.title }, c.id))) }) })] }) }), _jsx(FormMessage, {})] })) }), _jsx(FormField, { control: form.control, name: "description", render: ({ field }) => (_jsxs(FormItem, { className: "flex-[1_1_100%]", children: [_jsx(FormLabel, { children: "Description" }), _jsx(FormControl, { children: _jsx(Textarea, { className: "min-h-32 text-sm", placeholder: "Write here", ...field }) }), _jsx(FormMessage, {})] })) }), _jsxs("div", { className: "w-full flex justify-between items-center", children: [_jsx(Button, { className: "bg-transparent border-primary-red text-primary-red font-bold", variant: "outline", onClick: onDeleteCard, children: "Delete" }), _jsx(Button, { type: "submit", className: "bg-primary-blue text-white font-bold", children: "Save" })] })] }) }) })] }));
};
export default CardFormDialog;
