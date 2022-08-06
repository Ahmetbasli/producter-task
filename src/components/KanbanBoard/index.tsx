import React from "react";
import styles from "./index.module.scss";
import Card from "./Card";
import TodoIcon from "src/common/Icons/Todo";

const KanbanBoard = () => {
  return (
    <div className={styles.wrapper}>
      <Card Icon={TodoIcon} title="To Do" points={25} />
      <Card Icon={TodoIcon} title="Done" points={125} />
    </div>
  );
};

export default KanbanBoard;
