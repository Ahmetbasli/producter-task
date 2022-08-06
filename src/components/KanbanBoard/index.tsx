import React from "react";
import styles from "./index.module.scss";
import Card from "./Card";
const KanbanBoard = () => {
  return (
    <div className={styles.wrapper}>
      <Card />
      <Card />
    </div>
  );
};

export default KanbanBoard;
