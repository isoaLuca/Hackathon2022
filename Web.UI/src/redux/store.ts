import { configureStore } from "@reduxjs/toolkit";
import { modalStateReducer } from "./reducer/Modal/reducer";
import { userStateReducer } from "./reducer/Users/reducer";

export const store = configureStore({
  reducer: {
    modal: modalStateReducer,
    /* users: userStateReducer */
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
