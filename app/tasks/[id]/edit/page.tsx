import { notFound } from "next/navigation"
import EditTaskForm from "@/components/EditTaskForm"
import { prisma } from "@/lib/db"

export default async function EditPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params

    const task = await prisma.task.findUnique({
        where: { id }
    })

    if (!task) {
        notFound()
    }

    return <EditTaskForm task={task} />
}