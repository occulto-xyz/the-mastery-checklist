"use client";

import { useState } from "react";
import TaskInputForm from "./components/TaskInputForm";
import { Task } from "@/lib/validators";
import TasksTable from "./components/table/TasksTable";

export const runtime = "edge";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  function changeTasks(task: Task) { 
    setTasks([...tasks, task]);
  }

  return (
    <main className="flex flex-col min-h-screen w-screen p-24 space-y-20">
      <TaskInputForm changeTasks={changeTasks} />
      <TasksTable
        className={tasks.length > 0 ? "block" : "hidden"}
        tasks={tasks}
      />
    </main>
  );
}
