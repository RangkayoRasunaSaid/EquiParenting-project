import { configureStore } from '@reduxjs/toolkit';
import articleReducer from './articleSlice';
import userReducer from './userSlice'

const store = configureStore({
  reducer: {
    articles: articleReducer,
    user: userReducer
    // Add other reducers here if any
  },
});

export default store;
