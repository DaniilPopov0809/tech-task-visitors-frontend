import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../const/axiosBaseUrl";

export const create = createAsyncThunk(
  "visitors/create",
  async ({ name, lastname, date }, thunkAPI) => {
    try {
      const response = await axios.post("/visitors", { name, lastname, date });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);
