// statsSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import config from '../../config/config';
import { toast } from 'react-toastify';

export const fetchStats = createAsyncThunk(
  'stats/fetchStats',
  async ({ startDate, endDate}) => {
    const response = await axios.get(config.apiUrl + `/stats/${startDate}/${endDate}`, {
      headers: { Authorization: sessionStorage.getItem('token') }
    });
    return response.data
  }
)

const initialState = {
  loading: false,
  stats: null,
  error: null,
};

const statsSlice = createSlice({
  name: 'stats',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchStats.pending, state => {
      state.loading = true
      state.stats = null
      state.error = null
    })
    builder.addCase(fetchStats.fulfilled, (state, action) => {
      state.loading = false
      state.stats = action.payload
      state.error = null
    })
    builder.addCase(fetchStats.rejected, (state, action) => {
      state.loading = false
      state.stats = null
      state.error = action.error.message
      toast.error(action.error.message)
    })
  }
});

export default statsSlice.reducer;
