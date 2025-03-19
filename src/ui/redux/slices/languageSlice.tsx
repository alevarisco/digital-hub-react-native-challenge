import { createSlice } from '@reduxjs/toolkit';

const languageSlice = createSlice({
  name: 'language',
  initialState: {
    isSpanish: false, // true for 'es', false for 'en'
  },
  reducers: {
    setLanguage: (state, action) => {
      state.isSpanish = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
