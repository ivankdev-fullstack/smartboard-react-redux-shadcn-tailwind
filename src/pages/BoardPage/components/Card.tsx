interface Props {
  id: string;
  title: string;
  description: string;
}

const Card = ({ id, title, description }: Props) => {
  return (
    <div className="flex flex-col gap-1 rounded-md border border-border px-3.5 py-2.5 bg-white cursor-pointer">
      {/* Title */}
      <div className="font-bold">{title}</div>
      {/* Description */}
      <div className="text-sm">{description}</div>
    </div>
  );
};

export default Card;
