import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useCards } from "@/hooks/useCards";
import { ICard, IColumn } from "@/types";
import { useState } from "react";
import { FaCirclePlus } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import Card from "./Card";
import CardFormDialog from "./CardFormDialog";

type DialogStateType = {
  isOpen: boolean;
  type: "update" | "create";
  selectedCard: ICard | null;
};

interface Props {
  data: IColumn;
}

const KanbanColumn = ({ data }: Props) => {
  const params = useParams();
  const { getCardsByBoardAndColumn } = useCards();
  const cards = getCardsByBoardAndColumn(params.id!, data.id);

  const [dialogState, setDialogState] = useState<DialogStateType>({
    isOpen: false,
    type: "create",
    selectedCard: null,
  });

  const handleUpdateCard = (card: ICard) => {
    setDialogState({
      isOpen: true,
      type: "update",
      selectedCard: card,
    });
  };

  const closeDialog = () => {
    setDialogState({
      isOpen: false,
      type: "create",
      selectedCard: null,
    });
  };

  return (
    <div className="flex flex-col w-[280px] gap-3 shrink-0 py-3">
      <div className="flex items-center gap-1">
        <div
          style={{ backgroundColor: data.color }}
          className="text-[13px] font-bold text-white w-full text-center py-1 rounded"
        >
          {data.title}
        </div>
        <div className="px-3 text-sm text-column-fg">{cards.length}</div>
      </div>
      <div className="group bg-column-bg hover:pb-[28px] rounded-md">
        <div className="bg-column-line w-full h-[7px] rounded-t-md"></div>
        <div className="flex flex-col gap-3 p-3">
          {cards?.map((c) => (
            <Card key={c.id} data={c} onClick={() => handleUpdateCard(c)} />
          ))}
        </div>
        <div className="relative text-[13px] text-column-fg text-center">
          {!cards.length && <p className="mb-3">No records</p>}

          <Dialog
            open={dialogState.isOpen}
            onOpenChange={(open) =>
              setDialogState((prev) => ({ ...prev, isOpen: open }))
            }
          >
            <DialogTrigger>
              <FaCirclePlus
                size={20}
                className="hidden absolute w-full bottom-[-10px] left-1/2 transform -translate-x-1/2 text-primary-blue cursor-pointer group-hover:block"
              />
            </DialogTrigger>
            <DialogContent className="max-w-[700px]">
              <CardFormDialog
                type={dialogState.type}
                parentColumn={data}
                cardData={dialogState.selectedCard}
                onClose={closeDialog}
              />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default KanbanColumn;
