import { createSlice } from '@reduxjs/toolkit';
import { loginUser, registerUser } from './operations';

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
  extraReducers: {
    [registerUser.fulfilled]: (state, action) => {
      // state.isRefreshing = false;
      // state.token = action.payload.token;
      // state.user = action.payload.user;
      // state.isLoggedIn = true;

      console.log(state);
      console.log(action);
    },
    [loginUser.fulfilled]: (state, action) => {
      console.log(state);
      console.log(action);
    },
    [registerUser.pending]: state => {
      // state.isRefreshing = true;

      console.log(state);
    },
    [loginUser.pending]: state => {
      console.log(state);
    },
    [registerUser.rejected]: state => {
      // state.isRefreshing = false;

      console.log(state);
    },
    [loginUser.rejected]: state => {
      console.log(state);
    },
  },
});

export const authReducer = slice.reducer;
