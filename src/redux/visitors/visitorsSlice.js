import { createSlice } from "@reduxjs/toolkit";
import visitorAPI from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const visitorsSlice = createSlice({
  name: "visitors",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(visitorAPI.readAll.pending, handlePending)
      .addCase(visitorAPI.readAll.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(visitorAPI.readAll.rejected, handleRejected)
      .addCase(visitorAPI.remove.pending, handlePending)
      .addCase(visitorAPI.remove.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          visitor => visitor.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
          
      .addCase(visitorAPI.remove.rejected, handleRejected)
      .addCase(visitorAPI.update.pending, handlePending)
      .addCase(visitorAPI.update.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const newVisitor = action.payload;
        const index = state.items.findIndex(
          visitor => visitor.id === newVisitor.id
        );
        state.items[index] = { ...state.items[index], ...newVisitor };
      })
      .addCase(visitorAPI.update.rejected, handleRejected)
      .addCase(visitorAPI.create.pending, handlePending)
      .addCase(visitorAPI.create.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(visitorAPI.create.rejected, handleRejected);
  },
});
