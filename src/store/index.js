import { configureStore } from "@reduxjs/toolkit";
import { bookReducer } from "./slices/bookSlice";

export let myStore = configureStore({
  reducer: {
    bookList: bookReducer,
  },
});
