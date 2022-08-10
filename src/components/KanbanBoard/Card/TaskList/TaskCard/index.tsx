import React, { FC, useEffect } from "react";
import TodoIcon from "src/common/Icons/Todo";
import { useAppDispatch, useAppSelector } from "src/store/app/hooks";
import {
  updateLists,
  selectDragItem,
  updateDragItem,
  updateDragOverItem,
} from "src/store/features/board/slice";
import getPlaceHolderDiv from "./helpers/handleTaskPlaceHolder";

import styles from "./index.module.scss";
import TaskCardProps from "./types";

const TaskCard: FC<TaskCardProps> = ({ info, index, name }) => {
  const dispatch = useAppDispatch();
  const dragItemInStore = useAppSelector(selectDragItem);
  const domDragItem = React.useRef<any>(null);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const { height } = e.currentTarget.getBoundingClientRect();

    dispatch(updateDragItem({ index, info, name, height: height - 12 }));
    dispatch(updateDragOverItem({ index, info, name }));

    const taskGrayBackgroundPlaceHolder = getPlaceHolderDiv();
    taskGrayBackgroundPlaceHolder!.style.height = `${height}px`;
    // setTimeout used to show different style of dragging item
    const Item = e.currentTarget;
    setTimeout(() => {
      domDragItem.current.parentNode.insertBefore(
        taskGrayBackgroundPlaceHolder,
        domDragItem.current
      );
      Item.style.display = "none";
    }, 1);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.stopPropagation();
    e.preventDefault();
    const taskGrayBackgroundPlaceHolder = getPlaceHolderDiv();

    const { height, y } = e.currentTarget.getBoundingClientRect();
    const middleOfBox = y + height / 2;
    const offset = e.clientY - middleOfBox;
    const isUp = offset < 0 ? true : false;

    domDragItem.current.parentNode.insertBefore(
      taskGrayBackgroundPlaceHolder,
      isUp ? domDragItem.current : domDragItem.current.nextSibling
    );

    // compair if two Item are in the same list
    if (name === dragItemInStore?.name) {
      if (index > dragItemInStore?.index) {
        dispatch(
          updateDragOverItem({ index: isUp ? index - 1 : index, info, name })
        );
      } else {
        dispatch(
          updateDragOverItem({ index: isUp ? index : index + 1, info, name })
        );
      }
    } else {
      dispatch(
        updateDragOverItem({ index: isUp ? index : index + 1, info, name })
      );
    }
  };

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    getPlaceHolderDiv()!.remove();
    e.currentTarget.style.display = "block";
  };
  const handleDrop = () => {
    getPlaceHolderDiv()!.remove();
    dispatch(updateLists());
  };

  return (
    <div
      ref={domDragItem}
      className={styles.dragWrapper}
      draggable
      onDragEnd={(e) => handleDragEnd(e)}
      onDragStart={(e) => handleDragStart(e)}
      onDragOver={(e) => handleDragOver(e)}
      onDrop={() => handleDrop()}
      onDragLeave={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      <div className={styles.wrapper}>
        {info}asjkfjkdasjf Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Vitae ad, deserunt deleniti officia dolor aperiam commodi nesciunt
        <TodoIcon />
      </div>
    </div>
  );
};

export default TaskCard;
