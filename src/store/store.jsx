import { configureStore } from "@reduxjs/toolkit";
import citySlice from "./citySlice";
import counterSlice from "./counterSlice";

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    cities: citySlice.reducer,
  },
});

export const counterActions = counterSlice.actions;
export const cityActions = citySlice.actions;

export default store;
