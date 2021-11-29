import React from "react";
import { FinishIcon } from "../icons";
import styles from "./finish-button.module.css";
import classnames from "classnames";

interface FinishButtonProps {
  complete: boolean;
  onClick?: () => void;
}

function FinishButton({ onClick = () => {}, complete }: FinishButtonProps) {
  return (
    <button className={classnames(styles.button)} onClick={onClick}>
      <FinishIcon className={classnames({ [styles.complete]: complete })} />
    </button>
  );
}

export default FinishButton;
