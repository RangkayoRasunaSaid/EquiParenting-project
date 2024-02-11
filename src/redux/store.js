import { configureStore } from '@reduxjs/toolkit';
import approverReducer from './approverSlice';

const store = configureStore({
  reducer: {
    approver: approverReducer,
    // ...reducers lainnya jika ada
  },
});

export default store;
