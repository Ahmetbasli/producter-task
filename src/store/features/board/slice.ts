import type { RootState } from "src/store/app/store";
import BoardState, { DragItemProp } from "src/store/features/board/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: BoardState = {
  dragItem: null,
  dragOverItem: null,
  lists: {
    todo: ["1", "2", "3", "10"],
    done: ["4", "5", "6"],
  },
};

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    addToList(
      state,
      action: PayloadAction<{
        name: DragItemProp["name"];
      }>
    ) {
      if (!state.dragItem) return;
      state.lists[state.dragItem.name].splice(state.dragItem.index, 1);
      state.lists[action.payload.name].push(state.dragItem!.info);
    },
    updateLists(state) {
      if (!state.dragItem || !state.dragOverItem) return;

      state.lists[state.dragItem.name].splice(state.dragItem.index, 1);
      state.lists[state.dragOverItem.name].splice(
        state.dragOverItem.index,
        0,
        state.dragItem.info
      );
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
