import { configureStore } from "@reduxjs/toolkit";
import articleReducer from "../slices/articleSlice";
import userReducer from '../slices/userSlice'

const store = configureStore({
  reducer: {
    articles: articleReducer,
    user: userReducer,
    // Add other reducers here if any
  },
});

export default store;