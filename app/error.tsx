"use client";

export default function Error({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    return (
        <div className="p-4">
            <h2 className="text-red-500 font-bold">Something went wrong</h2>
            <button
                onClick={() => reset()}
                className="mt-2 bg-blue-500 text-white px-4 py-1 rounded"
            >
                Try again
            </button>
        </div>
    );
}