import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sortColumn: null,
  sortDirection: "asc",
};

export const sortSlice = createSlice({
  name: "sort",
  initialState,

  reducers: {
    setSortColumn: (state, action) => {
      state.sortColumn = action.payload;
    },
    setSortDirection: (state, action) => {
      state.sortDirection = action.payload;
    },
  },
});

export const { setSortColumn, setSortDirection } = sortSlice.actions;
