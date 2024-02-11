// memberSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  members: [],
  loading: false,
  error: null,
};

const memberSlice = createSlice({
  name: 'member',
  initialState,
  reducers: {
    setMembers(state, action) {
      state.members = action.payload;
      state.loading = false;
      state.error = null;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setMembers, setLoading, setError } = memberSlice.actions;
export default memberSlice.reducer;
