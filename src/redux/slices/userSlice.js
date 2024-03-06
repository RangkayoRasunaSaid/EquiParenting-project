// userSlice.js
import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import config from '../../config/config'
import { toast } from 'react-toastify';

export const fetchProfile = createAsyncThunk(
  'user/fetchProfile',
  async () => {
    try {
      const response = await axios.get(config.apiUrl + '/profile', {
        headers: { Authorization: sessionStorage.getItem('token') }
      });
      return response.data
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }
)

export const updateProfile = createAsyncThunk(
  'user/updateProfile',
  async (data, dispatch) => {
    const loadingToastId = toast.loading('Updating profile ...')
    try {
      const response = await axios.put(config.apiUrl + '/update-profile', data, {
        headers: { Authorization: sessionStorage.getItem('token') }
      });
      toast.update(loadingToastId, { render: response.data.message, isLoading: false, autoClose: 5000, closeOnClick: true });
      dispatch(fetchProfile())
    } catch (error) {
      toast.update(loadingToastId, { render: error.response.data.message, type: "error", isLoading: false, autoClose: 5000, closeOnClick: true });
      throw error.response.data.message
    }
  }
)

export const updatePassword = createAsyncThunk(
  'user/updatePassword',
  async (data) => {
    if (!data.oldPassword) return toast.warning('Harap Masukkan Password Lama')
    if (!data.newPassword) return toast.warning('Harap Masukkan Password Baru')

    const loadingToastId = toast.loading('Updating password ...')
    try {
      const response = await axios.put(config.apiUrl + '/update-password', data, {
        headers: { Authorization: sessionStorage.getItem('token') }
      });
      toast.update(loadingToastId, { render: response.data.message, isLoading: false, autoClose: 5000, closeOnClick: true });
    } catch (error) {
      toast.update(loadingToastId, { render: error.response.data.message, type: "error", isLoading: false, autoClose: 5000, closeOnClick: true })
    }
  }
)

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (data) => {
    if (!data.email || !data.password) {
      toast.warning('Email dan Password Harus Diisi')
      return null
    }
    const loadingToastId = toast.loading('Logging in...')
    try {
      const response = await axios.post(config.apiUrl + "/login", data)
      const { token } = response.data;  
      sessionStorage.setItem("token", token);
      toast.update(loadingToastId, { render: "Login Berhasil", type: "success", isLoading: false, autoClose: 5000, closeOnClick: true });
      window.scrollTo(0, 0)
    } catch (error) {
      toast.update(loadingToastId, { render: error.response.data.message, type: "error", isLoading: false, autoClose: 5000, closeOnClick: true })
    }
  }
)

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (data) => {
    if (!data.username || !data.email || !data.password || !data.confirmPassword) {
      toast.warning("Harap lengkapi semua kolom!")
      return
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(data.email)) {
      toast.warning("Harap masukkan alamat email yang valid!")
      return
    }
    if (data.password.length < 8) {
      toast.warning("Password harus memiliki minimal 8 karakter!")
      return
    }
    if (data.password !== data.confirmPassword) {
      toast.warning("Password dan Konfrimasi Password tidak sesuai")
      return
    }
    const loadingToastId = toast.loading('Signing in...')

    const userData = {
      username: data.username,
      email: data.email,
      password: data.password,
    }
    try {
      const response = await axios.post(config.apiUrl + "/register", userData)
      toast.update(loadingToastId, { render: response.data.message, type: "success", isLoading: false, autoClose: 5000, closeOnClick: true });
      window.scrollTo(0, 0)
      return response.data.message
    } catch (error) {
      toast.update(loadingToastId, { render: error.response.data.message, type: "error", isLoading: false, autoClose: 5000, closeOnClick: true })
    }
  }
)

const initialState = {
  loading: false,
  user: null,
  error: null
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: builder => {
    builder.addCase(loginUser.pending, state => {
      state.loading = true
      state.user = null
      state.error = null
    })
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false
      state.user = null
      state.error = null
    })
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false
      state.user = null
      state.error = action.error.message
    })
    builder.addCase(registerUser.pending, state => {
      state.loading = true
      state.user = null
      state.error = null
    })
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.loading = false
      state.user = null
      state.error = null
    })
    builder.addCase(registerUser.rejected, (state, action) => {
      state.loading = false
      state.user = null
      state.error = action.error.message
    })
    builder.addCase(fetchProfile.pending, state => {
      state.loading = true
      state.user = null
      state.error = null
    })
    builder.addCase(fetchProfile.fulfilled, (state, action) => {
      state.loading = false
      state.user = action.payload
      state.error = null
    })
    builder.addCase(fetchProfile.rejected, (state, action) => {
      state.loading = false
      state.user = null
      state.error = action.error.message
      toast.error(action.error.message)
    })
    builder.addCase(updateProfile.pending, state => {
      state.loading = true
      state.user = null
      state.error = null
    })
    builder.addCase(updateProfile.fulfilled, (state, action) => {
      state.loading = false
      // state.user = action.payload
      state.error = null
    })
    builder.addCase(updateProfile.rejected, (state, action) => {
      state.loading = false
      state.user = null
      state.error = action.error.message
    })
    builder.addCase(updatePassword.pending, state => {
      state.loading = true
      // state.user = null
      state.error = null
    })
    builder.addCase(updatePassword.fulfilled, (state, action) => {
      state.loading = false
      // state.user = action.payload
      state.error = null
    })
    builder.addCase(updatePassword.rejected, (state, action) => {
      state.loading = false
      // state.user = null
      state.error = action.error.message
    })
  }
})

export default userSlice.reducer