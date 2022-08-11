import type { RootState } from "src/store/app/store";
import BoardState, { CardProps } from "src/store/features/board/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import lists from "src/data/KanbanBoardLists.json";
const initialState: BoardState = {
  dragItem: null,
  dragOverItem: null,
  lists: lists as CardProps[],
};

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    addToList(
      state,
      action: PayloadAction<{
        TaskListId: number;
      }>
    ) {
      if (state.dragItem === null) return;
      // remove dragginItem from list
      state.lists
        .find((list) => list.id === state.dragItem!.TaskListId)
        ?.tasks.splice(state.dragItem.index, 1);
      // add draggingItem to list
      state.lists
        .find((list) => list.id === action.payload.TaskListId)
        ?.tasks.push(state.dragItem.taskInfo);
    },
    updateLists(state) {
      if (!state.dragItem || !state.dragOverItem) return;

      state.lists
        .find((list) => list.id === state.dragItem!.TaskListId)
        ?.tasks.splice(state.dragItem.index, 1);
      state.lists
        .find((list) => list.id === state.dragOverItem!.TaskListId)
        ?.tasks.splice(state.dragOverItem.index, 0, state.dragItem.taskInfo);
    },
    updateDragItem(state, action) {
      state.dragItem = action.payload;
    },
    updateDragOverItem(state, action) {
      state.dragOverItem = action.payload;
    },
  },
});

export const { addToList, updateDragItem, updateDragOverItem, updateLists } =
  boardSlice.actions;

export const selectBoard = (state: RootState) => state.board;
export const selectDragItem = (state: RootState) => state.board.dragItem;

export default boardSlice.reducer;
