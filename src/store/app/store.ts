import { configureStore } from "@reduxjs/toolkit";
import boardReducer from "src/store/features/board/slice";
import sidebarReducer from "src/store/features/sidebar/slice";

export const store = configureStore({
  reducer: {
    board: boardReducer,
    sidebar: sidebarReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
