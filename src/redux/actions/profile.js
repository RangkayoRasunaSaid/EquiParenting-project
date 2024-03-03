// actions.js
import config from '../../config/config';
import * as actionTypes from '../actionTypes/profile'; // Make sure to import your action types correctly
import axios from 'axios';

export const fetchUserProfile = () => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.FETCH_USER_PROFILE_REQUEST });
    try {
      const response = await axios.get(config.apiUrl + '/profile');
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
      const response = await axios.post(config.apiUrl + '/update-profile', userData);
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
      const response = await axios.post(config.apiUrl + '/update-password', passwordData);
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
