import { Button } from "@/components/ui/button";
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { DEFAULT_COLUMN_TYPES, DEFAULT_COLUMNS } from "@/data";
import { useCards } from "@/hooks/useCards";
import { ICard, IColumn } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import * as z from "zod";

const formSchema = z.object({
  title: z.string().min(1),
  description: z.string().max(200).optional(),
  status: z.enum(
    Object.values(DEFAULT_COLUMN_TYPES) as [
      DEFAULT_COLUMN_TYPES,
      ...DEFAULT_COLUMN_TYPES[]
    ],
    {
      message: "Status must be selected",
    }
  ),
});

interface Props {
  type: "update" | "create";
  parentColumn: IColumn;
  onClose: () => void;
  cardData?: ICard | null;
}

const CardFormDialog = ({ type, parentColumn, onClose, cardData }: Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: cardData?.title || "",
      description: cardData?.description || "",
      status: parentColumn.type,
    },
  });
  const [selectedStatus, setSelectedStatus] = useState<IColumn>(parentColumn);
  const params = useParams();
  const boardId = params.id!;
  const { handleAddCard, handleUpdateCard, handleDeleteCard } = useCards();

  const onStatusSelect = (value: string) => {
    const newStatus = DEFAULT_COLUMNS.find((c) => c.type === value);
    if (newStatus) setSelectedStatus(newStatus);
  };

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    if (type === "create") {
      handleAddCard({ ...data, boardId, columnId: selectedStatus!.id });
    }
    if (type === "update") {
      handleUpdateCard(cardData!.id, {
        ...data,
        boardId,
        columnId: selectedStatus!.id,
      });
    }
    onClose();
  };

  const onDeleteCard = () => handleDeleteCard(cardData!.id);

  return (
    <DialogHeader>
      <DialogTitle className="mb-5 pb-3 border-b-[1px] border-border">
        {type === "create" ? "Create new card" : "Update card"}
      </DialogTitle>
      <div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-wrap w-full gap-10"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className="flex-[1_1_calc(50%-1.5rem)]">
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem className="flex-[1_1_calc(50%-1.5rem)]">
                  <FormLabel>Status</FormLabel>
                  <FormControl>
                    <Select
                      value={selectedStatus.type}
                      onValueChange={(value) => {
                        field.onChange(value);
                        onStatusSelect(value);
                      }}
                    >
                      <SelectTrigger
                        className="text-column-fg"
                        style={{
                          justifyContent: "center",
                          backgroundColor: selectedStatus?.color,
                          color: "white",
                          fontWeight: "bold",
                        }}
                      >
                        <SelectValue placeholder="Select Status" />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <div className="flex flex-col gap-1">
                          {DEFAULT_COLUMNS.map((c) => (
                            <SelectItem
                              key={c.id}
                              value={c.type}
                              className="justify-center text-white font-bold text-[13px]"
                              style={{ background: c.color }}
                            >
                              {c.title}
                            </SelectItem>
                          ))}
                        </div>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="flex-[1_1_100%]">
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      className="min-h-32 text-sm"
                      placeholder="Write here"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="w-full flex justify-between items-center">
              <Button
                className="bg-transparent border-primary-red text-primary-red font-bold"
                variant="outline"
                onClick={onDeleteCard}
              >
                Delete
              </Button>
              <Button
                type="submit"
                className="bg-primary-blue text-white font-bold"
              >
                Save
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </DialogHeader>
  );
};

export default CardFormDialog;
