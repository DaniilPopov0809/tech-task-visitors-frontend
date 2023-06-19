import { configureStore } from "@reduxjs/toolkit";
import { visitorsSlice } from "./visitors/visitorsSlice";
import { sortSlice } from "./visitors/sortSlice";

const store = configureStore({
  reducer: { visitors: visitorsSlice.reducer, sort: sortSlice.reducer },
});

export default store;
