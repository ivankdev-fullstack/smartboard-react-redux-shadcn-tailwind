import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useCards } from "@/hooks/useCards";
import { IColumn } from "@/types";
import { FaCirclePlus } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import { DEFAULT_CARDS } from "../../../data";
import Card from "./Card";
import CardFormDialog from "./CardFormDialog";

interface Props {
  data: IColumn;
}

const BoardColumn = ({ data }: Props) => {
  // hook cards by column
  const params = useParams();
  // hook status by column
  const { getCardsByBoardAndColumn } = useCards();
  const cards = getCardsByBoardAndColumn(params.id!, data.id);

  return (
    <div className="flex flex-col w-[280px] gap-3 shrink-0 py-3">
      {/* Heading */}
      <div className="flex items-center gap-1">
        <div
          style={{ backgroundColor: data.color }}
          className="text-[13px] font-bold text-white w-full text-center py-1 rounded"
        >
          {data.title}
        </div>
        {/* TODO: we get this from hook (redux) */}
        <div className="px-3 text-sm text-column-fg">0</div>
      </div>
      <div className="group bg-column-bg hover:pb-[33px] rounded-md">
        <div className="bg-column-line w-full h-[7px] rounded-t-md"></div>
        {/* Cards */}
        <div className="flex flex-col gap-3 p-3">
          {cards?.map((c) => (
            <Card key={c.id} data={c} />
          ))}
        </div>
        <div className="relative text-[13px] text-column-fg text-center py-1">
          {!DEFAULT_CARDS.length && <p className="mb-3">No records</p>}
          <Dialog>
            <DialogTrigger>
              <FaCirclePlus
                size={20}
                className="hidden absolute w-full bottom-[-13px] left-1/2 transform -translate-x-1/2 text-primary-blue cursor-pointer group-hover:block"
              />
            </DialogTrigger>
            <DialogContent className="max-w-[700px]">
              <CardFormDialog type="create" parentColumn={data} />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default BoardColumn;
