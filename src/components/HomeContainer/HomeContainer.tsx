import Header from "../Header/Header";
import Main from "../Main/Main";
import { Task, User } from "@prisma/client";

function HomeContainer({
  tasks,
  user,
}: {
  tasks: Task[] | undefined;
  user: User | null | undefined;
}) {
  return (
    <>
      <Header />
      <Main user={user} tasks={tasks} />
    </>
  );
}

export default HomeContainer;
