// memberSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import config from '../../config/config';
import { toast } from 'react-toastify';

const token = sessionStorage.getItem('token')

export const fetchMembers = createAsyncThunk(
  'member/fetchMembers',
  async () => {
    const response = await axios.get(config.apiUrl + '/members', {
      headers: { Authorization: token }
    });
    return response.data.members
  }
)

export const deleteMembers = createAsyncThunk(
  'member/deleteMembers',
  async (id, { dispatch }) => {
    const loadingToastId = toast.loading(`Deleting a Member ...`)
    try {
      const response = await axios.delete(config.apiUrl + `/members/${id}`, {
        headers: { Authorization: token }
      });
      toast.update(loadingToastId, { render: response.data.message, type:'info', isLoading: false, autoClose: 5000, closeOnClick: true })
      dispatch(fetchMembers())
    } catch (error) {
      toast.update(loadingToastId, { render: error.response.data.message, type:'error', isLoading: false, autoClose: 5000, closeOnClick: true })
      throw error.response.data.message
    }
  }
)

export const createMember = createAsyncThunk(
  'member/createMember',
  async (data, { dispatch }) => {
    const loadingToastId = toast.loading('Adding a member ...');
    try {
      const response = await axios.post(config.apiUrl + "/members", {
        name: data.name,
        member_role: data.member_role,
        avatar: data.avatar,
      }, {
        headers: {
          Authorization: token,
        },
      });
  
      const { id } = response.data.member;
      const startDate = data.start_date;
      const endDate = data.end_date;

      if (startDate && endDate) {
        const rewardResponse = await axios.post(config.apiUrl + "/reward", {
          spinned_at: '',
          start_date: startDate,
          end_date: endDate,
          id_member: id
        }, {
          headers: { Authorization: token }
        });
        console.log("Reward created successfully for member with ID:", id);
      }
      toast.update(loadingToastId, { render: response.data.message, isLoading: false, autoClose: 5000, closeOnClick: true });
      dispatch(fetchMembers())
    
    } catch (error) {
      toast.update(loadingToastId, { render: error.response.data.message, type: "error", isLoading: false, autoClose: 5000, closeOnClick: true })
      throw error.response.data.message
    }
  }
)

const initialState = {
  loading: false,
  members: null,
  error: null,
};

const memberSlice = createSlice({
  name: 'member',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchMembers.pending, state => {
      state.loading = true
      state.members = null
      state.error = null
    })
    builder.addCase(fetchMembers.fulfilled, (state, action) => {
      state.loading = false
      state.members = action.payload
      state.error = null
    })
    builder.addCase(fetchMembers.rejected, (state, action) => {
      state.loading = false
      state.members = null
      state.error = action.error.message
      toast.error(action.error.message)
    })
    builder.addCase(deleteMembers.pending, state => {
      state.loading = true
      // state.members = null
      state.error = null
    })
    builder.addCase(deleteMembers.fulfilled, (state, action) => {
      state.loading = false
      // state.members = action.payload
      state.error = null
    })
    builder.addCase(deleteMembers.rejected, (state, action) => {
      state.loading = false
      // state.members = null
      state.error = action.error.message
    })
    builder.addCase(createMember.pending, state => {
      state.loading = true
      // state.members = null
      state.error = null
    })
    builder.addCase(createMember.fulfilled, (state, action) => {
      state.loading = false
      // state.members = action.payload
      state.error = null
    })
    builder.addCase(createMember.rejected, (state, action) => {
      state.loading = false
      // state.members = null
      state.error = action.error.message
    })
  }
});

export default memberSlice.reducer;
