import { createSlice } from '@reduxjs/toolkit';
import { loginUser, logoutUser, refreshUser, registerUser } from './operations';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  isLoggedIn: false,
  token: null,
  isRefreshing: false,
  created: false,
  error: '',
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetAuth: () => {
      return initialState;
    },
  },
  extraReducers: {
    [registerUser.fulfilled]: (state, action) => {
      state.created = true;
      state.error = '';
    },
    [loginUser.fulfilled]: (state, action) => {
      state.user = action.payload.data.data;
      state.token = action.payload.data.token;
      state.isLoggedIn = true;
    },
    [logoutUser.fulfilled]: (state, action) => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [refreshUser.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [refreshUser.pending]: state => {
      state.isRefreshing = true;
    },
    [refreshUser.rejected]: state => {
      state.isRefreshing = false;
    },
    [registerUser.rejected]: (state, action) => {
      state.error = action.payload.data.message;
    },
    [loginUser.rejected]: (state, action) => {
      state.error = action.payload.data.message;
    },
  },
});

export const { resetAuth } = slice.actions;

export const authReducer = slice.reducer;
