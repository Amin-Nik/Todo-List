"use client";
import { Task, User } from "@prisma/client";
import SideBar from "../SideBar/SideBar";
import Tasks from "../Tasks/Tasks";
import { useState } from "react";

function Main({
  tasks,
  user,
}: {
  tasks: Task[] | undefined;
  user: User | null | undefined;
}) {
  const [filteredTask, setFilteredTask] = useState(tasks);

  function filterByLabel(label: string) {
    const filteredTask = tasks?.filter((tsk) => tsk.labels.includes(label));
    setFilteredTask(filteredTask);
  }

  return (
    <main className="pl-80 ">
      <SideBar filterByLabelEvent={filterByLabel} labels={user?.labels} />
      <Tasks tasks={filteredTask} />
    </main>
  );
}

export default Main;
