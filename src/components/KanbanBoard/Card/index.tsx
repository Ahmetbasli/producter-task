import React, { FC } from "react";
import getPlaceHolderDiv from "src/components/KanbanBoard/Card/TaskList/TaskCard/helpers/handleTaskPlaceHolder";
import styles from "./index.module.scss";
import TaskList from "./TaskList";
import CardProps from "./types";

const Card: FC<CardProps> = ({ title, Icon, points, tasks, name }) => {
  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.stopPropagation();
    e.preventDefault();
    getPlaceHolderDiv()!.remove();
  };

  return (
    <div onDragLeave={(e) => handleDragLeave(e)} className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.title}>
          <Icon />
          <span>{title}</span>
        </div>
        <div className={styles.points}>{points}</div>
      </div>
      <TaskList tasks={tasks} name={name} />
    </div>
  );
};

export default Card;
