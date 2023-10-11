import { createSlice } from '@reduxjs/toolkit';
import { registerUser } from './operations';

const initialState = {
  user: {
    name: 'example',
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
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isLoggedIn = true;
    },
    [registerUser.pending]: state => {
      state.isRefreshing = true;
    },
    [registerUser.rejected]: state => {
      state.isRefreshing = false;
    },
  },
});

export const { resetAuth } = slice.actions;

export const authReducer = slice.reducer;
