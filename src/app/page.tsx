import HomeContainer from "@/components/HomeContainer/HomeContainer";
import { GetUser, GetTask } from "@/utils/action";

export default async function Home() {
  const tasks = await GetTask();
  const user = await GetUser();
  // await PostTask();
  // await PostUser();
  return (
    <>
      <HomeContainer user={user} tasks={tasks} />
    </>
  );
}
