import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: localStorage.getItem("login")
    ? JSON.parse(localStorage.getItem("login"))
    : {},
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    addLoginState: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addLoginState } = loginSlice.actions;

export default loginSlice.reducer;
