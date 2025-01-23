import { IBoard } from "@/types";
import { ReactNode } from "react";
interface Props {
    headerContent?: ReactNode;
    data: Partial<IBoard> | IBoard;
    onClick: (...props: any) => void;
}
declare const BoardsGridItem: ({ headerContent, data, onClick }: Props) => import("react/jsx-runtime").JSX.Element;
export default BoardsGridItem;
