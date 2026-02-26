"use server";

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function addTask(formData: FormData) {
    const title = formData.get("title") as string;

    if (!title) return;

    await prisma.task.create({
        data: { title },
    });

    revalidatePath("/");
}

export async function toggleTask(id: string) {
    const task = await prisma.task.findUnique({ where: { id } });

    await prisma.task.update({
        where: { id },
        data: { completed: !task?.completed },
    });

    revalidatePath("/");
}

export async function deleteTask(id: string) {
    await prisma.task.delete({ where: { id } });
    revalidatePath("/");
}