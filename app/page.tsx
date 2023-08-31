"use client";

import { useState } from "react";

import { Task } from "@/lib/validators";
import TasksTable from "./components/table/TasksTable";
import TaskInputForm from "./components/inputs/TaskInputForm";

export const runtime = "edge";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  function changeTasks(task: Task) {
    setTasks([...tasks, task]);
  }

  return (
    <main className="flex flex-col min-h-screen w-screen p-24 space-y-20 overflow-x-hidden">
      <TaskInputForm changeTasks={changeTasks} />
      <TasksTable
        className={tasks.length > 0 ? "block" : "hidden"}
        tasks={tasks}
      />
    </main>
  );
}
