import React, { useState } from "react";
import styles from "./task-submission.module.css";
interface InputSubmissionProps {
  onTaskSubmit?: (text: string) => void;
}

function TaskSubmission({ onTaskSubmit = () => {} }: InputSubmissionProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);

  const handleSubmit = () => {
    onTaskSubmit(text);
    setText("");
  };

  const [text, setText] = useState("");

  return (
    <div className={styles.container}>
      <input
        className={styles.taskInput}
        placeholder="Please Write Something"
        value={text}
        onChange={handleChange}
      />
      <button
        className={styles.submitButton}
        onClick={handleSubmit}
        disabled={text === ""}
      >
        SUBMIT!
      </button>
    </div>
  );
}

export default TaskSubmission;
