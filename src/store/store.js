import { configureStore } from "@reduxjs/toolkit";
import articleReducer from "./articleSlice";

const store = configureStore({
  reducer: {
    articles: articleReducer,
    // Add other reducers here if any
  },
});

export default store;
