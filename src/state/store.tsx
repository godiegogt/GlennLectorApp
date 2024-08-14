import { configureStore } from '@reduxjs/toolkit';
import ConfigurationSlice from './slices/ConfigurationSlice';

export const store = configureStore({
  reducer: {
    configuration: ConfigurationSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;