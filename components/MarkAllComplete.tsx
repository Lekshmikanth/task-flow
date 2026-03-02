"use client";

import { markAllComplete } from "@/actions/taskActions";
import { useTransition } from "react";
import Button from "./Button";

const MarkAllComplete = () => {
    const [isPending, startTransition] = useTransition();
    return (
        <Button
            onClick={() => {
                startTransition(() => {
                    markAllComplete();
                });
            }}
            disabled={isPending}
        >
            {isPending ? "Updating..." : "Mark All Complete"}
        </Button>)
}

export default MarkAllComplete