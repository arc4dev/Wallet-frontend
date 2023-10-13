import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001/api';

const setAuthToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const registerUser = createAsyncThunk('/auth/register', async (body, thunkAPI) => {
  try {
    const res = await axios.post('/auth/sign-up', body);

    console.log(res);

    return null;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response);
  }
});

export const loginUser = createAsyncThunk('/auth/login', async (body, thunkAPI) => {
  try {
    const res = await axios.post('/auth/sign-in', body);

    console.log(res.data);

    setAuthToken(res.token);

    return res;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response);
  }
});

export const refreshUser = createAsyncThunk('/auth/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;

  if (persistedToken === null) return thunkAPI.rejectWithValue('Unable to refresh user!');

  try {
    setAuthToken(persistedToken);

    const res = await axios.get('/users/current');

    return res.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});

export const logoutUser = createAsyncThunk('/auth/logOut', async (_, thunkAPI) => {
  try {
    clearAuthToken();

    return null;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});
