import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../const/axiosBaseUrl";

export const update = createAsyncThunk(
  "visitors/update",
  async ({ id, name, lastname }, thunkAPI) => {
    try {
      const response = await axios.patch(`/visitors/${id}`, { name, lastname });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);
