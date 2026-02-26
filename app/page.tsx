import { prisma } from "@/lib/db";
import TaskList from "@/components/TaskList";
import AddTaskForm from "@/components/AddTaskForm";

export default async function Home() {
  const tasks = await prisma.task.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-green-500">TaskFlow</h1>
      <AddTaskForm />
      <TaskList tasks={tasks} />
    </main>
  );
}