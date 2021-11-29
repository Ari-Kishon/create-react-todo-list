import React from "react";
import Task from "../task/task";
import { ITask } from "../types";
import styles from "./tasks.module.css";

export interface TasksProps {
    tasks: ITask[];
    onChange?: (change: ITask[]) => void;
}

function Tasks({ onChange = () => { }, tasks }: TasksProps) {
    const handleToggle = (id: number) => {
        onChange(
            tasks.map((task) => {
                if (task.id === id) {
                    task.complete = !task.complete;
                }
                return task;
            })
        );
    };

    const handleRemove = (id: number) => {
        onChange(
            tasks.filter((task) => {
                return task.id !== id;
            })
        );
    };

    const handleRename = (text: string, id: number) => {
        onChange(
            tasks.map((task) => {
                if (task.id === id) {
                    task.text = text;
                }
                return task;
            })
        );
    };

    const taskComponents = tasks.length ? (
        tasks.map((item: ITask) => (
            <Task
                id={item.id}
                text="asdadsasdsad"
                complete={item.complete}
                removeTask={handleRemove}
                toggleTask={handleToggle}
                renameTask={handleRename}
            />
        ))
    ) : (
        <h4>No tasks to display</h4>
    );

    return <div className={styles.tasks}>{taskComponents}</div>;
}

export default Tasks;
