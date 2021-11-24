import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import citySlice from "./citySlice";
import counterSlice from "./counterSlice";

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    cities: citySlice.reducer,
    auth: authSlice.reducer,
  },
});

export const counterActions = counterSlice.actions;
export const cityActions = citySlice.actions;
export const authActions = authSlice.actions;

export default store;
