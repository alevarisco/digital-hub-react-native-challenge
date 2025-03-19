import { brandUseCase } from '../../../application/brand/use-get-brands';
import { brandRepository } from '../../../services/brand/brandRepositoryImpl';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

export const fetchBrands = createAsyncThunk('brands/fetchBrands', async () => {
  const data = await brandUseCase(brandRepository, undefined);
  return data;
});

const brandsSlice = createSlice({
  name: 'brands',
  initialState: {
    itemCount: 0,
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBrands.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBrands.fulfilled, (state, action) => {
        state.loading = false;
        state.itemCount = action.payload.length;
      })
      .addCase(fetchBrands.rejected, (state) => {
        state.loading = false;
      });
  },
});
export default brandsSlice.reducer;

