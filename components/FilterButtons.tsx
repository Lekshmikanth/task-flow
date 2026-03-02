"use client"

import Link from "next/link"
import { useSearchParams } from "next/navigation"

export default function FilterButtons({ currentFilter, }: { currentFilter: string }) {
    const searchParams = useSearchParams()

    const createFilterUrl = (filter: string) => {
        const params = new URLSearchParams(searchParams.toString())

        if (filter === "all") {
            params.delete("filter")
        } else {
            params.set("filter", filter)
        }

        return `/?${params.toString()}`
    }

    const className = `bg-white text-gray-800 p-2 rounded-lg disabled:bg-blue-400 disabled:cursor-not-allowed hover:bg-blue-300 hover:cursor-pointer`;
    return (
        <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
            <Link href={createFilterUrl("all")}>
                <button className={className} disabled={currentFilter === "all"}>All</button>
            </Link>

            <Link href={createFilterUrl("active")}>
                <button className={className} disabled={currentFilter === "active"}>Active</button>
            </Link>

            <Link href={createFilterUrl("completed")}>
                <button className={className} disabled={currentFilter === "completed"}>
                    Completed
                </button>
            </Link>
        </div>
    )
}