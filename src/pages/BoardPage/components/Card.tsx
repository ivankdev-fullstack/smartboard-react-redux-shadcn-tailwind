import { ICard } from "@/types";

interface Props {
  data: ICard;
  onClick: () => void;
}

const Card = ({ data, onClick }: Props) => {
  return (
    <div
      className="flex flex-col gap-1 rounded-md border border-border px-3.5 py-2.5 bg-white cursor-pointer"
      onClick={onClick}
    >
      <div className="font-bold">{data.title}</div>
      <div className="text-sm">{data?.description}</div>
    </div>
  );
};

export default Card;
