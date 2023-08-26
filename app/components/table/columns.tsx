import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";

export type AnalyzedTask = {
  taskName: string;
  difficulty: string;
  importance: string;
  priority: string;
};

export const taskColumns: ColumnDef<AnalyzedTask>[] = [
  {
    id: "select",
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "taskName",
    header: () => <div className="text-center">Task Name</div>,
  },
  {
    accessorKey: "difficulty",
    header: () => <div className="text-center">Difficulty</div>,
  },
  {
    accessorKey: "importance",
    header: () => <div className="text-center">Importance</div>,
  },
  {
    accessorKey: "priority",
    header: () => <div className="text-center">Priority</div>,
  },
];
