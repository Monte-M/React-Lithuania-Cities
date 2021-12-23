import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { authentication: false },
  reducers: {
    login(state) {
      state.authentication = true;
    },
    logout(state) {
      state.authentication = false;
    },
  },
});

export default authSlice;

export const authActions = authSlice.actions;
