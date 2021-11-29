import React from "react";
import { TrashIcon } from "../icons";
import styles from "./trash-button.module.css";
import classnames from "classnames";

interface TrashButtonProps {
  onClick?: () => void;
}

function TrashButton({ onClick = () => {} }: TrashButtonProps) {
  return (
    <button className={classnames(styles.button)} onClick={onClick}>
      <TrashIcon />
    </button>
  );
}

export default TrashButton;
