import axios from "../../../const/axiosBaseUrl";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { token } from "../../../utils/operationToken";

const logOut = createAsyncThunk(
  "auth/logOut",
  async (credentials, thunkAPI) => {
    try {
      await axios.post("/auth/logout", credentials);
      token.unset();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export default logOut;
