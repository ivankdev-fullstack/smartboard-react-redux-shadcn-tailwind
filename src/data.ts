import { ICard, IColumn } from "./types";

export enum DEFAULT_COLUMN_TYPES {
  BACKLOG = "BACKLOG",
  TODO = "TODO",
  IN_PROGRESS = "IN_PROGRESS",
  DONE = "DONE",
}

export const DEFAULT_COLUMNS: IColumn[] = [
  {
    id: "1",
    title: "Backlog",
    type: DEFAULT_COLUMN_TYPES.BACKLOG,
    color: "hsl(var(--column-status-1))",
  },
  {
    id: "2",
    title: "To Do",
    type: DEFAULT_COLUMN_TYPES.TODO,
    color: "hsl(var(--column-status-2))",
  },
  {
    id: "3",
    title: "In Progress",
    type: DEFAULT_COLUMN_TYPES.IN_PROGRESS,
    color: "hsl(var(--column-status-3))",
  },
  {
    id: "4",
    title: "Done",
    type: DEFAULT_COLUMN_TYPES.DONE,
    color: "hsl(var(--column-status-4))",
  },
];

export const DEFAULT_CARDS: ICard[] = [
  // Cards for Board 1
  {
    id: "1",
    title: "Fix Backlog issue",
    description: "Investigate and resolve issues in the backlog.",
    columnId: "1",
    statusId: "1",
    boardId: "1",
  },
  {
    id: "2",
    title: "Plan To Do tasks",
    description: "Outline tasks for the To Do column.",
    columnId: "2",
    statusId: "2",
    boardId: "1",
  },
  {
    id: "3",
    title: "Track In Progress tasks",
    description: "Ensure that tasks in progress are on schedule.",
    columnId: "3",
    statusId: "3",
    boardId: "1",
  },
  {
    id: "4",
    title: "Complete Done tasks",
    description: "Review and finalize tasks in the Done column.",
    columnId: "4",
    statusId: "4",
    boardId: "1",
  },

  // Cards for Board 2
  {
    id: "5",
    title: "Backlog review",
    description: "Go over the backlog for the new project.",
    columnId: "1",
    statusId: "1",
    boardId: "2",
  },
  {
    id: "6",
    title: "Organize To Do",
    description: "Organize tasks into the To Do list.",
    columnId: "2",
    statusId: "2",
    boardId: "2",
  },
  {
    id: "7",
    title: "Review ongoing tasks",
    description: "Ensure ongoing tasks are progressing smoothly.",
    columnId: "3",
    statusId: "3",
    boardId: "2",
  },
  {
    id: "8",
    title: "Verify completed tasks",
    description: "Double-check the work on completed tasks.",
    columnId: "4",
    statusId: "4",
    boardId: "2",
  },

  // Cards for Board 3
  {
    id: "9",
    title: "Backlog ideas",
    description: "Brainstorm new ideas for the backlog.",
    columnId: "1",
    statusId: "1",
    boardId: "3",
  },
  {
    id: "10",
    title: "Assign To Do tasks",
    description: "Distribute tasks from the To Do column.",
    columnId: "2",
    statusId: "2",
    boardId: "3",
  },
  {
    id: "11",
    title: "Monitor progress",
    description: "Check progress on active tasks.",
    columnId: "3",
    statusId: "3",
    boardId: "3",
  },
  {
    id: "12",
    title: "Archive finished work",
    description: "Move finished tasks to the archive.",
    columnId: "4",
    statusId: "4",
    boardId: "3",
  },
];
