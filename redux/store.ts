import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Default localStorage for web
import authReducer from "./slices/authSlice";
// import cartReducer from "./slices/cartSlice";

// Persist Config
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "cart"], // Only persist the `auth` slice
};

// Root Reducer
const rootReducer = combineReducers({
  auth: authReducer,
  // cart: cartReducer
});

// Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure Store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Required for redux-persist
    }),
});

// Persistor
export const persistor = persistStore(store);

// Types for Store
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
