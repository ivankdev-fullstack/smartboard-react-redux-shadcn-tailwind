import { BoardViewType } from "@/pages/BoardPage/BoardPage";
interface Props {
    isActive: boolean;
    changeViewType: (type: BoardViewType) => void;
}
declare const KanbanViewButton: ({ isActive, changeViewType }: Props) => import("react/jsx-runtime").JSX.Element;
export default KanbanViewButton;
