import React, { useEffect } from "react";
import styles from "./index.module.scss";
import Card from "./Card";
import { selectBoard } from "src/store/features/board/slice";
import { useAppDispatch, useAppSelector } from "src/store/app/hooks";
import { createTaskPlaceHolder } from "src/components/KanbanBoard/Card/TaskList/TaskCard/helpers/handleTaskPlaceHolder";

const KanbanBoard = () => {
  const boardData = useAppSelector(selectBoard);
  const dispatch = useAppDispatch();

  useEffect(() => {
    createTaskPlaceHolder(dispatch);
  }, []);

  return (
    <div className={styles.wrapper}>
      {boardData.lists.map(({ id, title, icon, points, tasks }, index) => (
        <Card
          key={id}
          id={id}
          title={title}
          icon={icon}
          points={points}
          tasks={tasks}
        />
      ))}
    </div>
  );
};

export default KanbanBoard;
