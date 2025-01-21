import { ICard } from "@/types";

const Card = ({ data }: { data: Partial<ICard> }) => {
  return (
    <div className="flex flex-col gap-1 rounded-md border border-border px-3.5 py-2.5 bg-white cursor-pointer">
      {/* Title */}
      <div className="font-bold">{data.title}</div>
      {/* Description */}
      <div className="text-sm">{data?.description}</div>
    </div>
  );
};

export default Card;
