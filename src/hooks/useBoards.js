import { addBoard, deleteBoard, updateBoard } from "@/redux/actions/boards";
import { useDispatch, useSelector } from "react-redux";
export const useBoards = () => {
    const dispatch = useDispatch();
    const boards = useSelector((state) => state.boards);
    const handleAddBoard = (userId) => {
        dispatch(addBoard(userId));
    };
    const handleUpdateBoard = (id, name) => {
        dispatch(updateBoard(id, { name }));
    };
    const handleDeleteBoard = (id) => {
        dispatch(deleteBoard(id));
    };
    return {
        boards,
        handleAddBoard,
        handleUpdateBoard,
        handleDeleteBoard,
    };
};
