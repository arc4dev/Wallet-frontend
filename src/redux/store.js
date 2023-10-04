import { configureStore } from '@reduxjs/toolkit';
import appReducer from '../redux/Auth/slice';

const store = configureStore({
  reducer: {
    app: appReducer,
  },
});

export default store;
