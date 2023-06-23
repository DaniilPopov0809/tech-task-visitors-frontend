import { createSlice } from "@reduxjs/toolkit";
import authOperation from "./operations";
import { toast } from "react-toastify";

const initialState = {
  username: null,
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(authOperation.login.fulfilled, (state, action) => {
        state.username = action.payload.username;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        toast.success("Login is successful!");
      })
      .addCase(authOperation.login.rejected, () => {
        toast.error("Login is failed! Try again.");
      })
      .addCase(authOperation.logOut.fulfilled, (state) => {
        state.username = null;
        state.token = null;
        state.isLoggedIn = false;
        toast.success("Logout is successful!");
      })
      .addCase(authOperation.refresh.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(authOperation.refresh.fulfilled, (state, action) => {
        state.username = action.payload.username;
        console.log("🚀 ~ file: authSlice.js:37 ~ .addCase ~ action.payload:", action.payload)
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(authOperation.refresh.rejected, state => {
        state.isRefreshing = false;
      }),
});
