import { Button } from "@/components/ui/button";
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { DEFAULT_STATUSES, STATUS } from "../data";

const formSchema = z.object({
  title: z.string().min(1),
  description: z.string().max(200).optional(),
  status: z.enum(["BACKLOG", "TODO", "IN_PROGRESS", "DONE"], {
    message: "Status must be selected",
  }),
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
  const [selectedStatus, setSelectedStatus] = useState<STATUS | null>(null);

  const onStatusSelect = (value: string) => {
    const newStatus = DEFAULT_STATUSES.find((status) => status.value === value);
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
      <DialogDescription>
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
                          {DEFAULT_STATUSES.map((s) => (
                            <SelectItem
                              key={s.id}
                              value={s.value}
                              className="justify-center text-white font-bold text-[13px]"
                              style={{ background: s.color }}
                            >
                              {s.name}
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
      </DialogDescription>
    </DialogHeader>
  );
};

export default CardFormDialog;
