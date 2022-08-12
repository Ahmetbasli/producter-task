import type { RootState } from "src/store/app/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: { activeButtonText: string } = {
  activeButtonText: "Task",
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    updateActiveButtonText(
      state,
      action: PayloadAction<{
        text: string;
      }>
    ) {
      state.activeButtonText = action.payload.text;
    },
  },
});

export const { updateActiveButtonText } = sidebarSlice.actions;

export const selectActiveButtonText = (state: RootState) =>
  state.sidebar.activeButtonText;

export default sidebarSlice.reducer;
