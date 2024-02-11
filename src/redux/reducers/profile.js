// reducers.js
import * as actionTypes from '../actionTypes/profile';

const initialState = {
  userProfile: null,
  loading: false,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USER_PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case actionTypes.FETCH_USER_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        userProfile: action.payload,
        error: null
      };
    case actionTypes.FETCH_USER_PROFILE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    // Define cases for updating user profile and password similarly
    default:
      return state;
  }
};

export default reducer;
