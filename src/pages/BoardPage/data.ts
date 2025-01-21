export const DEFAULT_COLUMNS = [
  // BACKLOG
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

export const DEFAULT_CARDS = [
  {
    id: "1",
    title: "Look into render bug in dashboard",
    description: "Look into render bug in dashboard",
    column: "backlog",
  },
  {
    id: "2",
    title: "Look into render bug in dashboard",
    description: "Look into render bug in dashboard",
    column: "todo",
  },
];

export const DEFAULT_STATUSES: STATUS[] = [
  {
    id: 1,
    name: "Backlog",
    value: "BACKLOG",
    color: "hsl(var(--column-status-1))",
  },
  { id: 2, name: "To do", value: "TODO", color: "hsl(var(--column-status-2))" },
  {
    id: 3,
    name: "In Progress",
    value: "IN_PROGRESS",
    color: "hsl(var(--column-status-3))",
  },
  { id: 4, name: "Done", value: "DONE", color: "hsl(var(--column-status-4))" },
];

export interface STATUS {
  id: number;
  name: string;
  value: string;
  color: string;
}
