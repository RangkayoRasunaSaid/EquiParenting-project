// activitySlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import config from '../../config/config';
import { toast } from 'react-toastify';

const token = sessionStorage.getItem("token");

export const fetchActivity = createAsyncThunk(
  'activity/fetchActivity',
  async (data) => {
    const response = await axios.get(config.apiUrl + `/activities/${data.id}/${data.Rewards[0].start_date}/${data.Rewards[0].end_date}`);
    return response.data
  }
)

export const approveActivity = createAsyncThunk(
  'activity/approveActivity',
  async ({ activity, approvedBy, member }, {dispatch}) => {
    const loadingToastId = toast.loading('Menyetujui Aktifitas ...');
    try {
      const response = await axios.put(config.apiUrl + `/activities/approve/${activity.id}`, { approval_by: approvedBy }, {
        headers: { Authorization: token },
      });
      toast.update(loadingToastId, { render: response.data.message, isLoading: false, autoClose: 5000, closeOnClick: true })
      dispatch(fetchActivity(member))
    } catch (error) {
      console.error(error.response.data.message, error);
      toast.update(loadingToastId, { render: error.response.data.message, type: "error", isLoading: false, autoClose: 5000, closeOnClick: true });
    }
  }
)

export const createActivity = createAsyncThunk(
  'activity/createActivity',
  async ({ data, member }, {dispatch}) => {
    const loadingToastId = toast.loading('Membuat Misi ...');
  
    try {
      const startDate = new Date(data.date_start_act);
      const endDate = new Date(data.date_stop_act);
      startDate.setHours(startDate.getHours() + 7);
      endDate.setHours(endDate.getHours() + 7);

      const response = await axios.post(config.apiUrl + "/activities", {
        id_member: member.id,
        title: data.title,
        category: data.category,
        date_start_act: startDate,
        date_stop_act: endDate,
        description: data.description,
        point: data.point,
      }, {
        headers: { Authorization: token },
      });
      toast.update(loadingToastId, { render:  'Berhasil menambahkan misi', isLoading: false, autoClose: 5000, closeOnClick: true });
      dispatch(fetchActivity(member))
    } catch (error) {
      toast.update(loadingToastId, { render: error.response.data.message, type: "error", isLoading: false, autoClose: 5000, closeOnClick: true });
      console.error(error.response.data.message, error);
      throw error.response.data.message
    }
  }
)

const initialState = {
  loading: false,
  activity: null,
  error: null,
};

const activitySlice = createSlice({
  name: 'activity',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchActivity.pending, state => {
      state.loading = true
      state.activity = null
      state.error = null
    })
    builder.addCase(fetchActivity.fulfilled, (state, action) => {
      state.loading = false
      state.activity = action.payload
      state.error = null
    })
    builder.addCase(fetchActivity.rejected, (state, action) => {
      state.loading = false
      state.activity = null
      state.error = action.error.message
      toast.error(action.error.message)
    })
    builder.addCase(createActivity.pending, state => {
      state.loading = true
      // state.activity = null
      state.error = null
    })
    builder.addCase(createActivity.fulfilled, (state, action) => {
      state.loading = false
      // state.activity = action.payload
      state.error = null
    })
    builder.addCase(createActivity.rejected, (state, action) => {
      state.loading = false
      // state.activity = null
      state.error = action.error.message
      toast.error(action.error.message)
    })
  }
});

export default activitySlice.reducer;
