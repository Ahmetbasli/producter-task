import React from "react";
import styles from "./index.module.scss";
import TaskCard from "./TaskCard";

const TaskList = () => {
  return (
    <div className={styles.wrapper}>
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
    </div>
  );
};

export default TaskList;
