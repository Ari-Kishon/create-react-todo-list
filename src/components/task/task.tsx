import React from "react";
import TrashButton from "../trash-button/trash-button";
import FinishButton from "../finish-button/finish-button";
import styles from "./task.module.css";
import classnames from "classnames";

export interface TaskProps {
    id: number;
    text: string;
    complete: boolean;
    renameTask?: (text: string, id: number) => void;
    removeTask?: (id: number) => void;
    toggleTask?: (id: number) => void;
}

function Task({
    renameTask,
    removeTask,
    toggleTask,
    id,
    text,
    complete,
}: TaskProps) {
    const handleChangeEvent = (x: React.ChangeEvent<HTMLInputElement>) => {
        renameTask && renameTask(x.target.value, id);
    };
    return (
        <div className={styles.task}>
            <input
                className={classnames(styles.taskText, { [styles.complete]: complete })}
                value={text}
                onChange={handleChangeEvent}
                aria-colcount={5}
                aria-busy
            />
            <TrashButton onClick={() => removeTask && removeTask(id)} />
            <FinishButton
                onClick={() => toggleTask && toggleTask(id)}
                complete={complete}
            />
        </div>
    );
}

export default Task;
