import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: localStorage.getItem("posts")
    ? JSON.parse(localStorage.getItem("posts"))
    : [],
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.value.push(action.payload);
    },
    setPosts: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addPost, setPosts } = postsSlice.actions;

export default postsSlice.reducer;
