import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:3000";

export const readAll = createAsyncThunk(
  'visitors/readAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/visitors');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

