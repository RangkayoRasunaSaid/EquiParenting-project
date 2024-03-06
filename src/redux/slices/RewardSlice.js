// RewardSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import config from '../../config/config';
import { toast } from 'react-toastify';
import { fetchMembers } from './memberSlice';

export const createReward = createAsyncThunk(
  'reward/createReward',
  async ({ data, memberIds }, { dispatch }) => {
    const token = sessionStorage.getItem("token");
    const loadingToastId = toast.loading('Creating Reward Dates ...');
    
    try {
      const startDate = new Date(data.start_date);
      const endDate = new Date(data.end_date);
      startDate.setHours(startDate.getHours() + 7);
      endDate.setHours(endDate.getHours() + 7);
      let response
      // Create rewards for each member asynchronously
      await Promise.all(memberIds.map(async (memberId) => {
        const requestData = {
          spinned_at: '',
          start_date: startDate,
          end_date: endDate,
          id_member: memberId
        };
  
        // Create reward for the member
        response = await axios.post(config.apiUrl + "/reward", requestData, {
          headers: {
            Authorization: token,
          },
        });
        console.log("Reward created successfully for member with ID:", memberIds);
  
        // Reset the score for the current memberId
        const resetResponse = await axios.put(config.apiUrl + "/reset-score", { memberId: memberId }, {
          headers: {
            Authorization: token,
          },
        });
        console.log("Score reset successfully for member with ID:", memberId);
      }))
      toast.update(loadingToastId, { render: response.data.message, isLoading: false, autoClose: 5000, closeOnClick: true });
      dispatch(fetchMembers())
    } catch (error) {
      console.error("Error:", error);
      toast.update(loadingToastId, { render: error.response.data.message, type: "error", isLoading: false, autoClose: 5000, closeOnClick: true });
    }
  }
)

const initialState = {
  loading: false,
  reward: null,
  error: null,
};

const RewardSlice = createSlice({
  name: 'reward',
  initialState,
  extraReducers: builder => {
    builder.addCase(createReward.pending, state => {
      state.loading = true
      state.reward = null
      state.error = null
    })
    builder.addCase(createReward.fulfilled, (state, action) => {
      state.loading = false
      // state.reward = action.payload
      state.error = null
    })
    builder.addCase(createReward.rejected, (state, action) => {
      state.loading = false
      state.reward = null
      state.error = action.error.message
      console.log(action);
      toast.error(action.error.message)
    })
  }
});

export default RewardSlice.reducer;
