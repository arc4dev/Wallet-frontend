import { configureStore } from '@reduxjs/toolkit';
import { financeReducer } from './finance/slice';
import { authReducer } from './Auth/slice';
import { globalReducer } from './global/slice';

const store = configureStore({
  reducer: {
    global: globalReducer,
    auth: authReducer,
    finance: financeReducer,
  },
});

export default store;
