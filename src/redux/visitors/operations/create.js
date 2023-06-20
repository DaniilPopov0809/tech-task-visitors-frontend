import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const create = createAsyncThunk(
  "visitors/create",
  async ({ name, lastName, date }, thunkAPI) => {
    try {
      const response = await axios.post("/visitors", {name, lastName, date});
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);
