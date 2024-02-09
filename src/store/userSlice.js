import { createSlice, createAsyncThunk, asyncThunkCreator } from "@reduxjs/toolkit";
import axios from "axios";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        isLoggedIn: false,
        username: ''
    },
    reducers: {
        login: (state, action) => {
            state.isLoggedIn = true;
            state.username = action.payload;
        },
        logout: state => {
            state.isLoggedIn = false;
            state.username = ''
        }
    }
})

export const { login, logout } = userSlice.actions
export const selectUser = state => state.user
export default userSlice.reducer