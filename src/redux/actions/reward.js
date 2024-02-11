// actions.js
import * as actionTypes from '../actionTypes/reward';
import axios from 'axios';

export const createReward = (rewardData) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.CREATE_REWARD_REQUEST });
    try {
      await axios.post('http://localhost:3000/rewards', rewardData);
      dispatch({ type: actionTypes.CREATE_REWARD_SUCCESS });
    } catch (error) {
      dispatch({
        type: actionTypes.CREATE_REWARD_FAILURE,
        payload: error.message
      });
    }
  };
};

export const updateReward = (id, rewardData) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.UPDATE_REWARD_REQUEST });
    try {
      await axios.put(`http://localhost:3000/rewards/${id}`, rewardData);
      dispatch({ type: actionTypes.UPDATE_REWARD_SUCCESS });
    } catch (error) {
      dispatch({
        type: actionTypes.UPDATE_REWARD_FAILURE,
        payload: error.message
      });
    }
  };
};

export const getReward = (id) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.GET_REWARD_REQUEST });
    try {
      const response = await axios.get(`http://localhost:3000/rewards/${id}`);
      dispatch({
        type: actionTypes.GET_REWARD_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: actionTypes.GET_REWARD_FAILURE,
        payload: error.message
      });
    }
  };
};

export const getAllRewards = () => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.GET_ALL_REWARDS_REQUEST });
    try {
      const response = await axios.get('http://localhost:3000/rewards');
      dispatch({
        type: actionTypes.GET_ALL_REWARDS_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: actionTypes.GET_ALL_REWARDS_FAILURE,
        payload: error.message
      });
    }
  };
};
