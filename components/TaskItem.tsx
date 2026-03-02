"use client";

import { toggleTask, deleteTask } from "@/actions/taskActions";
import Link from "next/link";

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
            <div className="space-x-3">
                <Link href={`/tasks/${task.id}/edit`}>
                    <button className="bg-blue-500 px-2 py-1 rounded-md hover:bg-blue-700 hover:cursor-pointer">Edit</button>
                </Link>
                <button
                    onClick={() => deleteTask(task.id)}
                    className="bg-red-500 px-2 py-1 rounded-md hover:bg-red-700 hover:cursor-pointer"
                >
                    Delete
                </button>
            </div>
        </div>
    );
}