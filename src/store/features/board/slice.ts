import type { RootState } from "src/store/app/store";
import BoardState from "src/store/features/board/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: BoardState = {
  todoList: [],
  doneList: [],
};

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {},
});

// export const {} = boardSlice.actions;

export const selectTodoList = (state: RootState) => state.board.todoList;
export const selectDoneList = (state: RootState) => state.board.doneList;

export default boardSlice.reducer;
