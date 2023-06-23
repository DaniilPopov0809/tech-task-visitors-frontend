import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { token } from '../../../utils/operationToken'; 

const refresh = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const presistToken = state.auth.token;

  if (!presistToken) {
    return thunkAPI.rejectWithValue('Error');
  }

  try {
    token.set(presistToken);
    const { data } = await axios.get('/auth/current');
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export default refresh;