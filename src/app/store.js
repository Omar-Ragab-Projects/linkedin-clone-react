import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./features/posts/posts";
import loginReducer from "./features/login/login";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    login: loginReducer,
  },
});
