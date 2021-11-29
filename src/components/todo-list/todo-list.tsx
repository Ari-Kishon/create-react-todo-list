import React, { useState } from "react";
import InputSubmission from "../task-submission/task-submission";
import Tasks from "../tasks/tasks";
import { ITask } from "../types";

const defaultTasks: ITask[] = [];

function TodoList() {
    const [tasks, setTasks] = useState(defaultTasks);
    const addTask = (text: string) => {
        if (text) {
            setTasks([...tasks, { id: Date.now(), text, complete: false }]);
        }
    };

    return (
        <div>
            <InputSubmission onTaskSubmit={addTask} />
            <Tasks tasks={tasks} onChange={setTasks} /></div>
    );
}

export default TodoList;
