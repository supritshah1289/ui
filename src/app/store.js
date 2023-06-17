import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "../reducers/Item/itemSlice";

export const store = configureStore({
  reducer: {
    items: itemsReducer,
  },
});
