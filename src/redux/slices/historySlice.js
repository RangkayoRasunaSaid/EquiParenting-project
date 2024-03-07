// historySlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import config from '../../config/config';
import { toast } from 'react-toastify';

export const fetchHistory = createAsyncThunk(
  'history/fetchHistory',
  async () => {
    const response = await axios.get(config.apiUrl + '/activities', {
      headers: { Authorization: sessionStorage.getItem('token') }
    });

    return response.data
  }
)

const initialState = {
  loading: false,
  history: null,
  error: null,
};

const historySlice = createSlice({
  name: 'history',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchHistory.pending, state => {
      state.loading = true
      state.history = null
      state.error = null
    })
    builder.addCase(fetchHistory.fulfilled, (state, action) => {
      state.loading = false
      state.history = action.payload
      state.error = null
    })
    builder.addCase(fetchHistory.rejected, (state, action) => {
      state.loading = false
      state.history = null
      state.error = action.error.error
      toast.error(action.error.error)
    })
  }
});

export default historySlice.reducer;
