import { ColumnDef } from "@tanstack/react-table";

export type AnalyzedTask = {
  taskName: string;
  difficulty: string;
  priority: string;
  result: string;
};

export const taskColumns: ColumnDef<AnalyzedTask>[] = [
  {
    accessorKey: "taskName",
    header: "Task Name",
  },
  {
    accessorKey: "difficulty",
    header: "Difficulty",
  },
  {
    accessorKey: "priority",
    header: "Priority",
  },
  {
    accessorKey: "result",
    header: "Result",
  },
];
