import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

export const remove = createAsyncThunk(
    'visitors/remove',
    async (id, thunkAPI) => {
      try {
        const response = await axios.delete(`/visitors/${id}`);
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );