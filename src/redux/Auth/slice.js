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
      state.isRefreshing = false;
    },
    [loginUser.fulfilled]: (state, action) => {
      state.user = action.payload.data;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logoutUser.fulfilled]: state => {
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
  },
});

export const { resetAuth } = slice.actions;

export const authReducer = slice.reducer;
