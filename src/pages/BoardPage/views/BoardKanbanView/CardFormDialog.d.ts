import { ICard, IColumn } from "@/types";
interface Props {
    type: "update" | "create";
    parentColumn: IColumn;
    onClose: () => void;
    cardData?: ICard | null;
}
declare const CardFormDialog: ({ type, parentColumn, onClose, cardData }: Props) => import("react/jsx-runtime").JSX.Element;
export default CardFormDialog;
