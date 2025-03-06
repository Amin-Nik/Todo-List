import { Task } from "@prisma/client";
import TaskCard from "../TaskCard/TaskCard";

function Tasks({ tasks }: { tasks: Task[] | undefined }) {
  return (
    <section className="h-[91vh] pt-4 flex justify-start content-start flex-wrap gap-5">
      {tasks?.map((task) => (
        <TaskCard key={task.id} data={task} />
      ))}
    </section>
  );
}

export default Tasks;
