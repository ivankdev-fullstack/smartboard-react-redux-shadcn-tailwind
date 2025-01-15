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
    <div className="flex gap-2 px-5 bg-white rounded-t">
      <Select>
        <SelectTrigger className="w-auto gap-2 border-0 shadow-none font-bold">
          <SelectValue placeholder="View Type" />
        </SelectTrigger>
        <SelectContent className="bg-white p-1">
          <SelectItem value="kanban" className="cursor-pointer w-[160px]">
            Kanban View
          </SelectItem>
          <SelectItem value="chart">Chart View</SelectItem>
        </SelectContent>
      </Select>

      <Button variant="outline" className="border-0 shadow-none">
        Filter
      </Button>
      <Button variant="outline" className="border-0 shadow-none">
        Sort
      </Button>
    </div>
  );
};

export default BoardViewActions;
