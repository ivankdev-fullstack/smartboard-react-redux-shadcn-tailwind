import { addBoard, deleteBoard, updateBoard } from "@/redux/actions/boards";
import { AppDispatch, RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";

export const useBoards = () => {
  const dispatch = useDispatch<AppDispatch>();

  const boards = useSelector((state: RootState) => state.boards);

  const handleAddBoard = (userId: string) => {
    dispatch(addBoard(userId));
  };

  const handleUpdateBoard = (id: string, name: string) => {
    dispatch(updateBoard(id, { name }));
  };

  const handleDeleteBoard = (id: string) => {
    dispatch(deleteBoard(id));
  };

  return {
    boards,
    handleAddBoard,
    handleUpdateBoard,
    handleDeleteBoard,
  };
};
