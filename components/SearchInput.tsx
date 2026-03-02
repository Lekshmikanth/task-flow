"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function SearchInput() {
    const router = useRouter()
    const searchParams = useSearchParams()

    const [value, setValue] = useState(searchParams.get("search") || "")

    useEffect(() => {
        const timeout = setTimeout(() => {
            const params = new URLSearchParams(searchParams.toString())

            if (value) {
                params.set("search", value)
            } else {
                params.delete("search")
            }

            router.replace(`/?${params.toString()}`)
        }, 500)

        return () => clearTimeout(timeout)
    }, [value])

    return (
        <input
            type="text"
            placeholder="Search tasks..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
            style={{
                padding: "10px",
                width: "100%",
                marginBottom: "20px",
                borderRadius: "8px",
                border: "1px solid #ddd",
            }}
        />
    )
}