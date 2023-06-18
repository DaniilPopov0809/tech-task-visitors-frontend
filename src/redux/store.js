import { configureStore } from "@reduxjs/toolkit";
import { visitorsSlice } from "./visitors/visitorsSlice";

const store = configureStore({
  reducer: visitorsSlice.reducer,
});

export default store;
