import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Brand } from '../../../services/brand/brand.interface';
import { BrandTableState } from '../types';

const initialState: BrandTableState = {
  items: [],
  pagination: {
    page: 1,
    limit: 10,
    sort: '',
    order: 'ASC',
    end: false,
    query: undefined,
  },
};

const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    fetchItemsSuccess(state, action: PayloadAction<{ items: Brand[] }>) {
      state.items = action.payload.items;
    },
    setPage(state, action: PayloadAction<number>) {
      state.pagination.page = action.payload;
    },
    setLimit(state, action: PayloadAction<number>) {
      state.pagination.limit = action.payload;
    },
    setSort(state, action: PayloadAction<string>) {
      state.pagination.sort = action.payload;
    },
    setOrder(state, action: PayloadAction<string>) {
      state.pagination.order = action.payload;
    },
    setQuery(state, action: PayloadAction<string>) {
      state.pagination.query = action.payload;
    },
  },
});

export const { fetchItemsSuccess, setPage, setLimit, setSort, setOrder, setQuery } =
  tableSlice.actions;
export default tableSlice.reducer;
