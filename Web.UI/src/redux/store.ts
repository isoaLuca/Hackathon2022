import { configureStore } from "@reduxjs/toolkit";
import { modalStateReducer } from "./reducer/Modal/reducer";

export const store = configureStore({
  reducer: {
    modal: modalStateReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
