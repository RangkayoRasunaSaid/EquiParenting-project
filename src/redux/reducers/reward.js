// reducers.js
import * as actionTypes from '../actionTypes/reward';

const initialState = {
  rewards: [],
  loading: false,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_REWARD_REQUEST:
    case actionTypes.UPDATE_REWARD_REQUEST:
    case actionTypes.GET_REWARD_REQUEST:
    case actionTypes.GET_ALL_REWARDS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case actionTypes.CREATE_REWARD_SUCCESS:
    case actionTypes.UPDATE_REWARD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null
      };
    case actionTypes.GET_REWARD_SUCCESS:
      return {
        ...state,
        loading: false,
        reward: action.payload,
        error: null
      };
    case actionTypes.GET_ALL_REWARDS_SUCCESS:
      return {
        ...state,
        loading: false,
        rewards: action.payload,
        error: null
      };
    case actionTypes.CREATE_REWARD_FAILURE:
    case actionTypes.UPDATE_REWARD_FAILURE:
    case actionTypes.GET_REWARD_FAILURE:
    case actionTypes.GET_ALL_REWARDS_FAILURE:
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
