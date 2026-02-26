import TaskItem from "./TaskItem";

export default function TaskList({ tasks }: any) {
    return (
        <div className="space-y-2">
            {tasks.map((task: any) => (
                <TaskItem key={task.id} task={task} />
            ))}
        </div>
    );
}