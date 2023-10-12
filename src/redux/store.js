import { configureStore } from '@reduxjs/toolkit';
import { financeReducer } from './finance/slice';
import { authReducer } from './Auth/slice';
import { globalReducer } from './global/slice';
import persistReducer from 'redux-persist/es/persistReducer';

import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import persistStore from 'redux-persist/es/persistStore';

const authPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['token'],
};

const store = configureStore({
  reducer: {
    global: globalReducer,
    auth: persistReducer(authPersistConfig, authReducer),
    finance: financeReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };
