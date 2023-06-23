import { configureStore } from "@reduxjs/toolkit";
import { visitorsSlice } from "./visitors/visitorsSlice";
import { sortSlice } from "./visitors/sortSlice";
import { authSlice } from "./auth/authSlice";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    visitors: visitorsSlice.reducer,
    sort: sortSlice.reducer,
    auth: persistReducer(persistConfig, authSlice.reducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
