"use client";

import { toggleTask, deleteTask } from "@/actions/taskActions";

export default function TaskItem({ task }: any) {
    return (
        <div className="flex justify-between items-center border p-2 rounded">
            <p
                onClick={() => toggleTask(task.id)}
                className={`cursor-pointer ${task.completed ? "line-through text-gray-400" : ""
                    }`}
            >
                {task.title}
            </p>

            <button
                onClick={() => deleteTask(task.id)}
                className="text-red-500"
            >
                Delete
            </button>
        </div>
    );
}