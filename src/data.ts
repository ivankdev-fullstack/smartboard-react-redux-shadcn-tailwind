import { IBoard, ICard, IColumn, IStatus } from "./types";

export const DEFAULT_BOARDS: IBoard[] = [
  {
    id: "1",
    name: "Untitled Board 1",
  },
  {
    id: "2",
    name: "Untitled Board 22323",
  },
  {
    id: "3",
    name: "Untitled Board 3",
  },
];

export const DEFAULT_COLUMNS: IColumn[] = [
  {
    id: "1",
    title: "Backlog",
    cards: [],
    color: "hsl(var(--column-status-1))",
  },
  { id: "2", title: "To Do", cards: [], color: "hsl(var(--column-status-2))" },
  {
    id: "3",
    title: "In Progress",
    cards: [],
    color: "hsl(var(--column-status-3))",
  },
  { id: "4", title: "Done", cards: [], color: "hsl(var(--column-status-4))" },
];

export const DEFAULT_CARDS: ICard[] = [
  {
    id: "1",
    title: "Look into render bug in dashboard",
    description: "Look into render bug in dashboard",
    // columnId: "backlog",
  },
  {
    id: "2",
    title: "Look into render bug in dashboard",
    description: "Look into render bug in dashboard",
    // columnId: "todo",
  },
];

export const DEFAULT_STATUSES: IStatus[] = [
  {
    id: "1",
    name: "Backlog",
    value: "BACKLOG",
    color: "hsl(var(--column-status-1))",
  },
  {
    id: "2",
    name: "To do",
    value: "TODO",
    color: "hsl(var(--column-status-2))",
  },
  {
    id: "3",
    name: "In Progress",
    value: "IN_PROGRESS",
    color: "hsl(var(--column-status-3))",
  },
  {
    id: "4",
    name: "Done",
    value: "DONE",
    color: "hsl(var(--column-status-4))",
  },
];
