import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import Card from "./Card";
import TodoIcon from "src/common/Icons/Todo";
import { selectBoard } from "src/store/features/board/slice";
import { useAppDispatch, useAppSelector } from "src/store/app/hooks";
import { createTaskPlaceHolder } from "src/components/KanbanBoard/Card/TaskList/TaskCard/helpers/handleTaskPlaceHolder";
import { DragItemProp } from "src/store/features/board/types";

const KanbanBoard = () => {
  const boardData = useAppSelector(selectBoard);
  const dispatch = useAppDispatch();

  useEffect(() => {
    createTaskPlaceHolder(dispatch);
  }, []);

  return (
    <div className={styles.wrapper}>
      {Object.entries(boardData.lists).map(([key, value]) => (
        <Card
          key={key}
          name={key}
          Icon={TodoIcon}
          title={key}
          points={25}
          tasks={value}
        />
      ))}
    </div>
  );
};

export default KanbanBoard;
