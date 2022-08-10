import React, { FC } from "react";
import Icon from "src/common/Icon";
import getPlaceHolderDiv from "src/components/KanbanBoard/Card/TaskList/TaskCard/helpers/handleTaskPlaceHolder";
import { CardProps } from "src/store/features/board/types";
import styles from "./index.module.scss";
import TaskList from "./TaskList";

const Card: FC<CardProps> = ({ title, id, icon, points, tasks }) => {
  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.stopPropagation();
    e.preventDefault();
    getPlaceHolderDiv()!.remove();
  };

  return (
    <div onDragLeave={(e) => handleDragLeave(e)} className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.title}>
          <Icon name={icon} />
          <span>{title}</span>
        </div>
        <div className={styles.points}>{points}</div>
      </div>
      <TaskList tasks={tasks} TaskListId={id} />
    </div>
  );
};

export default Card;
