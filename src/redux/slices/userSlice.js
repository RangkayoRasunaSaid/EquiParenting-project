// userSlice.js

import { createSlice, createAsyncThunk, asyncThunkCreator } from "@reduxjs/toolkit";
// import axios from "axios";

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setUser, setLoading, setError } = userSlice.actions;
export default userSlice.reducer;


// export const userSlice = createSlice({
//     name: 'user',
//     initialState: {
//         isLoggedIn: false,
//         username: ''
//     },
//     reducers: {
//         login: (state, action) => {
//             state.isLoggedIn = true;
//             state.username = action.payload;
//         },
//         logout: state => {
//             state.isLoggedIn = false;
//             state.username = ''
//         }
//     }
// })

// export const { login, logout } = userSlice.actions
// export const selectUser = state => state.user
// export default userSlice.reducer