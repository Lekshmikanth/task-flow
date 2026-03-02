"use client"

import React from "react"

type ButtonProps = {
    children: React.ReactNode
    onClick?: () => void
    type?: "button" | "submit"
    variant?: "primary" | "danger" | "secondary"
    disabled?: boolean
}

export default function Button({
    children,
    onClick,
    type = "button",
    variant = "primary",
    disabled = false,
}: ButtonProps) {
    const baseStyle: React.CSSProperties = {
        padding: "10px 16px",
        borderRadius: "8px",
        border: "none",
        cursor: disabled ? "not-allowed" : "pointer",
        fontWeight: 500,
        transition: "0.2s ease",
        opacity: disabled ? 0.6 : 1,
    }

    const variants: Record<string, React.CSSProperties> = {
        primary: {
            backgroundColor: "#2563eb",
            color: "white",
        },
        danger: {
            backgroundColor: "#dc2626",
            color: "white",
        },
        secondary: {
            backgroundColor: "#e5e7eb",
            color: "#111827",
        },
    }

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            style={{
                ...baseStyle,
                ...variants[variant],
            }}
        >
            {children}
        </button>
    )
}