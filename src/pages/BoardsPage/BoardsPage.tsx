import BoardsGrid from "./components/BoardsGrid";
import Navbar from "./components/Navbar";

const BoardsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="my-0 mx-auto pt-10 pb-32 w-3/4">
        <BoardsGrid />
      </div>
    </div>
  );
};

export default BoardsPage;
