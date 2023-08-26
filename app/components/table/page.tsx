import { Task } from "@/lib/validators";
import { DataTable } from "./data-table";
import { AnalyzedTask, taskColumns } from "./columns";

type TasksTableProps = {
  tasks: Task[];
};

export default function TasksTable(props: TasksTableProps) {
  const analyzedTasks: AnalyzedTask[] = props.tasks.map((task) => {
    return {
      taskName: task.taskName,
      difficulty: task.difficulty,
      priority: task.priority,
      result: (+task.difficulty + +task.priority).toString(),
    };
  });

  return (
    <div className="w-full">
      <DataTable columns={taskColumns} data={analyzedTasks} />
    </div>
  );
}
