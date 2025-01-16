import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const BoardViewActions = () => {
  return (
    <div className="flex gap-2 px-2 bg-white rounded-t">
      <Select>
        <SelectTrigger className="w-auto gap-2 border-0 shadow-none font-bold">
          <SelectValue placeholder="View Type" className="text-[13px]" />
        </SelectTrigger>
        <SelectContent className="bg-white p-1">
          <SelectItem
            value="kanban"
            className="cursor-pointer w-[160px] text-[13px]"
          >
            Kanban View
          </SelectItem>
          <SelectItem
            value="chart"
            className="cursor-pointer w-[160px] text-[13px]"
          >
            Chart View
          </SelectItem>
        </SelectContent>
      </Select>

      <Button variant="outline" className="border-0 shadow-none text-[13px]">
        Filter
      </Button>
      <Button variant="outline" className="border-0 shadow-none text-[13px]">
        Sort
      </Button>
    </div>
  );
};

export default BoardViewActions;
