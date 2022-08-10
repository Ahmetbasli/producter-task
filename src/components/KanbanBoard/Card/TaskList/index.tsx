import React, { FC, useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "src/store/app/hooks";
import { addToList, selectDragItem } from "src/store/features/board/slice";
import styles from "./index.module.scss";
import TaskCard from "./TaskCard";
import getPlaceHolderDiv from "./TaskCard/helpers/handleTaskPlaceHolder";
import TaskListProps from "./types";

const TaskList: FC<TaskListProps> = ({ tasks, name }) => {
  const dispatch = useAppDispatch();
  const dragItemInStore = useAppSelector(selectDragItem);

  const [isEntered, setIsEntered] = useState(false);
  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    setIsEntered(false);
  };
  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (getPlaceHolderDiv()) {
      getPlaceHolderDiv()!.remove();
    }
    setIsEntered(true);
  };
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    dispatch(addToList({ name }));
    setIsEntered(false);
  };

  return (
    <div className={styles.wrapper}>
      <div>
        {tasks.map((item, index) => (
          <TaskCard key={item} info={item} index={index} name={name} />
        ))}
      </div>
      <div
        className={styles.emptyArea}
        onDragOver={(e) => handleDragEnter(e)}
        onDragLeave={(e) => handleDragLeave(e)}
        onDrop={(e) => handleDrop(e)}
      >
        {isEntered && (
          <div
            onDragEnter={(e) => {
              e.stopPropagation();
              setIsEntered(true);
            }}
            onDragLeave={(e) => {
              e.stopPropagation();
              setIsEntered(false);
            }}
            style={{ height: dragItemInStore?.height }}
            className={styles.taskPlaceHolder}
          ></div>
        )}
      </div>
    </div>
  );
};

export default TaskList;
