import { Task } from "@/lib/validators";
import { DataTable } from "./data-table";
import { AnalyzedTask, taskColumns } from "./columns";
import { cn } from "@/lib/utils";
import React from "react";
import { Button } from "@/components/ui/button";
import html2canvas from "html2canvas";
import AlternativeOptionsDialog from "./AlternativeOptionsDialog";

interface TasksTableProps extends React.HTMLAttributes<HTMLDivElement> {
  tasks: Task[];
}

const TasksTable = React.forwardRef<HTMLDivElement, TasksTableProps>(
  ({ className, ...props }, ref) => {
    const analyzedTasks: AnalyzedTask[] = props.tasks
      .map((task) => {
        return {
          taskName: task.taskName,
          difficulty: task.difficulty,
          importance: task.importance,
          priority: (+task.difficulty + +task.importance).toString(),
        };
      })
      .sort((a, b) => +b.priority - +a.priority);

    return (
      <div
        ref={ref}
        className={cn("w-full flex flex-col space-y-20", className)}
      >
        <div id="task-table">
          <DataTable columns={taskColumns} data={analyzedTasks} />
        </div>
        <div className="flex flex-col justify-center items-center space-y-7">
          <Button
            className="bg-stone-50 text-stone-900 border-2 border-stone-50 hover:bg-stone-900 hover:text-stone-50 lg:w-72 w-44 lg:text-base text-xs sm:block hidden"
            variant="outline"
            onClick={() => {
              const table = document.getElementById("task-table");
              if (table) {
                html2canvas(table).then((canvas) => {
                  const link = document.createElement("a");
                  link.download = "table.png";
                  link.href = canvas.toDataURL("image/png");
                  link.click();
                });
              }
            }}
          >
            Download Table
          </Button>
          <AlternativeOptionsDialog />
        </div>
      </div>
    );
  }
);

export default TasksTable;
