// authActions.js

import axios from 'axios';

export const registerUser = userData => async dispatch => {
  try {
    const res = await axios.post('/api/register', userData);
    dispatch({ type: 'REGISTER_SUCCESS', payload: res.data });
  } catch (err) {
    dispatch({ type: 'REGISTER_FAIL', payload: err.response.data });
  }
};
