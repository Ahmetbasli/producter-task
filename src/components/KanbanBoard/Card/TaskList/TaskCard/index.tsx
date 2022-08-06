import React from "react";
import styles from "./index.module.scss";

const TaskCard = () => {
  const handleDragStart = () => {
    console.log("ahmet");
  };
  return (
    <div draggable onDragStart={handleDragStart} className={styles.wrapper}>
      TaskCard
    </div>
  );
};

export default TaskCard;
