import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const update = createAsyncThunk(
  "visitors/update",
  async ({id, name, lastName }, thunkAPI) => {
    try {
      const response = await axios.patch(`/visitors/${(id)}`, {name, lastName});
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.status);

    }
  }
);
