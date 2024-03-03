// actions.js
import config from '../../config/config';
import * as actionTypes from '../actionTypes/member';
import axios from 'axios';

export const createMember = (memberData) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.CREATE_MEMBER_REQUEST });
    try {
      await axios.post(config.apiUrl + '/members', memberData);
      dispatch({ type: actionTypes.CREATE_MEMBER_SUCCESS });
      // You can dispatch fetchMembers action here to update the state with the latest members list
    } catch (error) {
      dispatch({
        type: actionTypes.CREATE_MEMBER_FAILURE,
        payload: error.message
      });
    }
  };
};

export const fetchMembers = () => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.FETCH_MEMBERS_REQUEST });
    try {
      const response = await axios.get(config.apiUrl + '/members');
      dispatch({
        type: actionTypes.FETCH_MEMBERS_SUCCESS,
        payload: response.data.members
      });
    } catch (error) {
      dispatch({
        type: actionTypes.FETCH_MEMBERS_FAILURE,
        payload: error.message
      });
    }
  };
};

export const deleteMember = (memberId) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.DELETE_MEMBER_REQUEST });
    try {
      await axios.delete(config.apiUrl + `/members/${memberId}`);
      dispatch({ type: actionTypes.DELETE_MEMBER_SUCCESS, payload: memberId });
    } catch (error) {
      dispatch({
        type: actionTypes.DELETE_MEMBER_FAILURE,
        payload: error.message
      });
    }
  };
};
