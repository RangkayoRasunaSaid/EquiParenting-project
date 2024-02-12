// reducers.js
import * as actionTypes from '../actionTypes/member';

const initialState = {
  members: [],
  loading: false,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_MEMBER_REQUEST:
    case actionTypes.FETCH_MEMBERS_REQUEST:
    case actionTypes.DELETE_MEMBER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case actionTypes.CREATE_MEMBER_SUCCESS:
    case actionTypes.DELETE_MEMBER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null
      };
    case actionTypes.FETCH_MEMBERS_SUCCESS:
      return {
        ...state,
        loading: false,
        members: action.payload,
        error: null
      };
    case actionTypes.CREATE_MEMBER_FAILURE:
    case actionTypes.FETCH_MEMBERS_FAILURE:
    case actionTypes.DELETE_MEMBER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
