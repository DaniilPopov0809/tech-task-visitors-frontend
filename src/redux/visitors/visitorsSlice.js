import { createSlice } from "@reduxjs/toolkit";
import visitorOperation from "./operations";
import { toast } from "react-toastify";
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
      .addCase(visitorOperation.readAll.pending, handlePending)
      .addCase(visitorOperation.readAll.fulfilled, (state, action) => {
        handleFulfilled(state);
        state.items = action.payload;
      })
      .addCase(visitorOperation.readAll.rejected, handleRejected)
      .addCase(visitorOperation.remove.pending, handlePending)
      .addCase(visitorOperation.remove.fulfilled, (state, action) => {
        handleFulfilled(state);
        const index = state.items.findIndex(
          (visitor) => visitor.id === action.payload.id
        );
        state.items.splice(index, 1);
        toast.success(
          `${action.payload.name} ${action.payload.lastname} deleted!`
        );
      })

      .addCase(visitorOperation.remove.rejected, handleRejected)
      .addCase(visitorOperation.update.pending, handlePending)
      .addCase(visitorOperation.update.fulfilled, (state, action) => {
        handleFulfilled(state);
        const newVisitor = action.payload;
        const index = state.items.findIndex(
          (visitor) => visitor.id === newVisitor.id
        );
        state.items[index] = { ...state.items[index], ...newVisitor };
        toast.success(
          `${action.payload.name} ${action.payload.lastname} updated!`
        );
      })
      .addCase(visitorOperation.update.rejected, handleRejected)
      .addCase(visitorOperation.create.pending, handlePending)
      .addCase(visitorOperation.create.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
        toast.success(
          `${action.payload.name} ${action.payload.lastname} added!`
        );
      })
      .addCase(visitorOperation.create.rejected, handleRejected);
  },
});
