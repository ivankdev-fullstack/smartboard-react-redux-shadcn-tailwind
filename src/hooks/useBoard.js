import { useSelector } from "react-redux";
export const useBoard = (id) => useSelector((state) => state.boards.find((b) => b.id === id));
