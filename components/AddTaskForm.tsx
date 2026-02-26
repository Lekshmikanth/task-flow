"use client";

import { addTask } from "@/actions/taskActions";

export default function AddTaskForm() {
    return (
        <form action={addTask} className="flex gap-2 mb-4">
            <input
                name="title"
                placeholder="Enter task..."
                className="border p-2 flex-1 rounded"
            />
            <button className="bg-blue-500 text-white px-4 rounded">
                Add
            </button>
        </form>
    );
}