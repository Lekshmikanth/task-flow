"use client"

import { updateTask } from "@/actions/taskActions"
import { useFormStatus } from "react-dom"
import Button from "./Button"

function SubmitButton() {
    const { pending } = useFormStatus()

    return (
        <Button type="submit" disabled={pending}>
            {pending ? "Updating..." : "Update Task"}
        </Button>
    )
}

export default function EditTaskForm({ task }) {
    return (
        <form action={updateTask}>
            <input type="hidden" name="id" value={task.id} />

            <input
                name="title"
                defaultValue={task.title}
            />

            <SubmitButton />
        </form>
    )
}