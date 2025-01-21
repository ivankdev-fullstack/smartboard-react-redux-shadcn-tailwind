import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

export const useBoard = (id: string) =>
  useSelector((state: RootState) => state.boards.find((b) => b.id === id));
