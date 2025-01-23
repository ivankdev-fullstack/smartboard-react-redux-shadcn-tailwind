import { BoardViewType } from "../../BoardPage";
interface Props {
    boardView: BoardViewType;
    setBoardView: (prop: BoardViewType) => void;
}
declare const BoardViewsBar: ({ boardView, setBoardView }: Props) => import("react/jsx-runtime").JSX.Element;
export default BoardViewsBar;
