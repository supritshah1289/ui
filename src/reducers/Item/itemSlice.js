import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const ITEMS_URL = "http://localhost:8080/items";

const initialState = {
  items: [],
  status: "idle",
  error: null,
};

export const fetchItems = createAsyncThunk("items/fetchItems", async () => {
  const response = await axios.get(ITEMS_URL);
  return response.data;
});

export const itemSlice = createSlice({
  name: "items",
  initialState: initialState,
  reducers: {
    itemAdded: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchItems.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = state.items.concat(action.payload);
      })
      .addCase(fetchItems.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// return all actions on these reducers
export const { itemAdded } = itemSlice.actions;
// from state return the data and assign to the variables
export const selectAllItems = (state) => state.items.items; // expects name of slice . name of data array
export const selectStatus = (state) => state.status;
// export the reducer
export default itemSlice.reducer;
