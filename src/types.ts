export interface IStatus {
  id: string;
  name: string;
  value: string;
  color: string;
}

export interface ICard {
  id: string;
  title: string;
  description?: string;
  // FIX
  columnId?: string;
  statusId?: string;
}

export interface IColumn {
  id: string;
  title: string;
  color: string;
  cards: ICard[];
  // FIX
  boardId?: string;
}

export interface IBoard {
  id: string;
  name: string;
  userId?: string;
  // TODO: add img and color
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  img?: string;
}
