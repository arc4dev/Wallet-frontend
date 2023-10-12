import { createSlice } from '@reduxjs/toolkit';
import { loginUser, logoutUser, refreshUser, registerUser } from './operations';

const initialState = {
  user: {
    name: null,
    email: null,
    verify: false,
  },
  isLoggedIn: false,
  token: null,
  isRefreshing: false,
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
      // state.isRefreshing = false;
      state.user = action.payload.data;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [loginUser.fulfilled]: (state, action) => {
      console.log('login', action);
      // state.user = action.payload.data;
      // state.token = action.payload.token;
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
    [registerUser.pending]: state => {
      state.isRefreshing = true;
    },
    [refreshUser.rejected]: state => {
      state.isRefreshing = false;
    },
    [registerUser.rejected]: (state, action) => {
      // state.isRefreshing = false;
      console.log(state);
      console.log(action);
      state.error = action.payload.data.message;
    },
    [loginUser.rejected]: (state, action) => {
      // state.isRefreshing = false;
      console.log(state);
      console.log(action);
      state.error = action.payload.data.message;
      state.isLoggedIn = false;
    },
  },
});

export const { resetAuth } = slice.actions;

export const authReducer = slice.reducer;
