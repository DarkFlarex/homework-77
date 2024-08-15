import { configureStore } from '@reduxjs/toolkit';
import {BookMessagesReducer} from "../features/BookMessages/store/bookMessagesSlice.ts";

export const store = configureStore({
  reducer: {
    bookMessages:BookMessagesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;