// actions.js
import * as actionTypes from '../actionTypes/profile'; // Make sure to import your action types correctly
import axios from 'axios';

export const fetchUserProfile = () => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.FETCH_USER_PROFILE_REQUEST });
    try {
      const response = await axios.get('http://localhost:3000/profile');
      dispatch({
        type: actionTypes.FETCH_USER_PROFILE_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: actionTypes.FETCH_USER_PROFILE_FAILURE,
        payload: error.message
      });
    }
  };
};

export const updateUserProfile = (userData) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.UPDATE_USER_PROFILE_REQUEST });
    try {
      const response = await axios.post('http://localhost:3000/update-profile', userData);
      dispatch({
        type: actionTypes.UPDATE_USER_PROFILE_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: actionTypes.UPDATE_USER_PROFILE_FAILURE,
        payload: error.message
      });
    }
  };
};

export const updateUserPassword = (passwordData) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.UPDATE_USER_PASSWORD_REQUEST });
    try {
      const response = await axios.post('http://localhost:3000/update-password', passwordData);
      dispatch({
        type: actionTypes.UPDATE_USER_PASSWORD_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: actionTypes.UPDATE_USER_PASSWORD_FAILURE,
        payload: error.message
      });
    }
  };
};
