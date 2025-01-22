import { DEFAULT_COLUMN_TYPES } from "./data";

export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  img?: string;
}

export interface IBoard {
  id: string;
  name: string;
  userId?: string;
  // TODO: add img and color
}

export interface IColumn {
  id: string;
  title: string;
  type: DEFAULT_COLUMN_TYPES;
  color: string;
}

export interface ICard {
  id: string;
  title: string;
  description?: string;
  columnId: string;
  statusId: string;
  boardId: string;
}
