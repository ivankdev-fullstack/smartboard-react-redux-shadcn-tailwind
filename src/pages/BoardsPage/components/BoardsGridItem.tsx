const BoardsGridItem = () => {
  return (
    <div className="flex flex-col justify-center items-center min-w-[105px] min-h-[130px] h-full font-medium m-auto rounded-md hover:cursor-pointer hover:shadow-md gap-2">
      <div className="w-[82px] h-[82px] bg-primary-blue rounded-md"></div>
      <div className="flex justify-center items-center text-center text-sm min-h-[70px] px-3">
        Business Roadmap Lorem, ipsum dolor sit
      </div>
    </div>
  );
};

export default BoardsGridItem;
