import { Task } from "@prisma/client";
import TaskCard from "../TaskCard/TaskCard";

function Tasks({ tasks }: { tasks: Task[] | undefined }) {
  return (
    <section className="pt-4 flex flex-wrap gap-5">
      {tasks?.map((task) => (
        <TaskCard key={task.id} data={task} />
      ))}
    </section>
  );
}

export default Tasks;
