import { prisma } from "@/lib/db";
import TaskList from "@/components/TaskList";
import AddTaskForm from "@/components/AddTaskForm";
import FilterButtons from "@/components/FilterButtons";
import SearchInput from "@/components/SearchInput";

export default async function Home({ searchParams }: { searchParams: Promise<{ filter?: string; search?: string }> }) {
  const { filter, search } = await searchParams;

  const allowedFilters = ["all", "active", "completed"];
  const safeFilter = allowedFilters.includes(filter ?? "") ? filter : "all";

  const whereClause: any = {};

  if (safeFilter === "active") {
    whereClause.completed = false;
  }

  if (safeFilter === "completed") {
    whereClause.completed = true;
  }

  if (search?.trim()) {
    whereClause.title = {
      contains: search.trim(),
      mode: "insensitive",
    };
  }
  const tasks = await prisma.task.findMany({
    where: whereClause,
    orderBy: { createdAt: "desc" }
  })

  return (
    <main className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-green-500">TaskFlow</h1>
      <SearchInput />
      <FilterButtons currentFilter={safeFilter ?? "all"} />
      <AddTaskForm />
      <TaskList tasks={tasks} />
    </main>
  );
}