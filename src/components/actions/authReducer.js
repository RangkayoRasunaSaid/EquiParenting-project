// authReducer.js

const initialState = {
    user: null,
    isAuthenticated: false,
    error: null
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'REGISTER_SUCCESS':
        return {
          ...state,
          user: action.payload.user,
          isAuthenticated: true,
          error: null
        };
      case 'REGISTER_FAIL':
        return {
          ...state,
          user: null,
          isAuthenticated: false,
          error: action.payload.error
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  