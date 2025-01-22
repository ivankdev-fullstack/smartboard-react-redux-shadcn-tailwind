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
import { DEFAULT_COLUMN_TYPES, DEFAULT_COLUMNS } from "@/data.ts";
import { IColumn } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
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

const CardFormDialog = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      status: "" as any,
    },
  });
  const [selectedStatus, setSelectedStatus] = useState<IColumn | null>(null);

  const onStatusSelect = (value: string) => {
    const newStatus = DEFAULT_COLUMNS.find((c) => c.type === value);
    if (newStatus) setSelectedStatus(newStatus);
  };

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  return (
    <DialogHeader>
      <DialogTitle className="mb-5 pb-3 border-b-[1px] border-border">
        Create new card
      </DialogTitle>
      <div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-wrap w-full gap-10 justify-end"
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
                      onValueChange={(value) => {
                        field.onChange(value);
                        onStatusSelect(value);
                      }}
                    >
                      <SelectTrigger
                        className="text-column-fg"
                        style={{
                          justifyContent: selectedStatus ? "center" : "",
                          backgroundColor: selectedStatus?.color || "white",
                          color: selectedStatus ? "white" : "black",
                          fontWeight: selectedStatus ? "bold" : "normal",
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
            <Button
              type="submit"
              className="bg-primary-blue text-white font-bold"
            >
              Save
            </Button>
          </form>
        </Form>
      </div>
    </DialogHeader>
  );
};

export default CardFormDialog;
