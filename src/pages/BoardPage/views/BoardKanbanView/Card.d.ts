import { ICard } from "@/types";
interface Props {
    data: ICard;
    onClick: () => void;
}
declare const Card: ({ data, onClick }: Props) => import("react/jsx-runtime").JSX.Element;
export default Card;
