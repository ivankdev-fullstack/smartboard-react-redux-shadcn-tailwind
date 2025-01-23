import { IBoard } from "@/types";
import { ReactNode } from "react";
interface Props {
    triggerContent: ReactNode;
    data: IBoard;
}
declare const BoardActionsPopover: ({ triggerContent, data }: Props) => import("react/jsx-runtime").JSX.Element;
export default BoardActionsPopover;
