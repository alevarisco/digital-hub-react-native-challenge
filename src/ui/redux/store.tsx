import { configureStore } from '@reduxjs/toolkit';
import tableReducer from './slices/tableSlice';
import languageReducer from './slices/languageSlice';

export const store = configureStore({
  reducer: {
    table: tableReducer,
    language: languageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
