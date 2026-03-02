"use client";

import { addTask } from "@/actions/taskActions";
import Button from "./Button";

export default function AddTaskForm() {
    return (
        <form action={addTask} className="flex gap-2 mb-4">
            <input
                name="title"
                placeholder="Enter task..."
                className="border p-2 flex-1 rounded"
            />
            <Button>
                Add
            </Button>
        </form>
    );
}