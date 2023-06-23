import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { token } from '../../../utils/operationToken'; 

const login = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  
  try {
    const { data } = await axios.post('/auth/login', credentials);

    token.set(data.token);
    
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export default login;