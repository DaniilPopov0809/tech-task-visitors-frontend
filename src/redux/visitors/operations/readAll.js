import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../const/axiosBaseUrl";

export const readAll = createAsyncThunk(
  "visitors/readAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/visitors");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);
