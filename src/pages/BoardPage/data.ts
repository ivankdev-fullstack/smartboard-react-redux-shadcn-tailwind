export const DEFAULT_COLUMNS = [
  // BACKLOG
  { id: "1", title: "Backlog", cards: [], color: "hsl(var(--column-1))" },
  { id: "2", title: "To Do", cards: [], color: "hsl(var(--column-2))" },
  { id: "3", title: "In Progress", cards: [], color: "hsl(var(--column-3))" },
  { id: "4", title: "Done", cards: [], color: "hsl(var(--column-4))" },
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
