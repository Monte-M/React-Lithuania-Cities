import { createSlice } from "@reduxjs/toolkit";

const initState = { counter: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState: initState,
  reducers: {
    increase(state) {
      state.counter++; // toolkit naudoja immer paketa tam, kad isvengti mutacijos
    },
    decrease(state) {
      state.counter--;
    },
  },
});

export default counterSlice;
