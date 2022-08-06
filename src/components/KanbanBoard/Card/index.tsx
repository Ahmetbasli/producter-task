import React, { FC } from "react";
import styles from "./index.module.scss";
import TaskList from "./TaskList";

interface CardProps {
  title: string;
  Icon: FC;
  points: number;
}

const Card: FC<CardProps> = ({ title, Icon, points }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.title}>
          <Icon />
          <span>{title}</span>
        </div>
        <div className={styles.points}>{points}</div>
      </div>
      <TaskList />
    </div>
  );
};

export default Card;
