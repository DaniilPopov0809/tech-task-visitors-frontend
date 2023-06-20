import { createSlice } from "@reduxjs/toolkit";
import visitorAPI from "./operations";
import { toast } from 'react-toastify';
import handleHttpErrors from "../../utils/handleHttpErrors";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleFulfilled = (state) => {
  state.isLoading = false;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;  
  state.error = action.payload;
  toast.error(handleHttpErrors(state.error));
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
        handleFulfilled(state);
        state.items = action.payload;
      })
      .addCase(visitorAPI.readAll.rejected, handleRejected)
      .addCase(visitorAPI.remove.pending, handlePending)
      .addCase(visitorAPI.remove.fulfilled, (state, action) => {
        handleFulfilled(state);
        const index = state.items.findIndex(
          visitor => visitor.id === action.payload.id
        );
        state.items.splice(index, 1);
        toast.success(`${action.payload.name} ${action.payload.lastName} deleted!`);
      })
          
      .addCase(visitorAPI.remove.rejected, handleRejected)
      .addCase(visitorAPI.update.pending, handlePending)
      .addCase(visitorAPI.update.fulfilled, (state, action) => {
        handleFulfilled(state);
        const newVisitor = action.payload;
        const index = state.items.findIndex(
          visitor => visitor.id === newVisitor.id
        );
        state.items[index] = { ...state.items[index], ...newVisitor };
        toast.success(`${action.payload.name} ${action.payload.lastName} updated!`);
      })
      .addCase(visitorAPI.update.rejected, handleRejected)
      .addCase(visitorAPI.create.pending, handlePending)
      .addCase(visitorAPI.create.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
        toast.success(`${action.payload.name} ${action.payload.lastName} added!`);
      })
      .addCase(visitorAPI.create.rejected, handleRejected);
  },
});
