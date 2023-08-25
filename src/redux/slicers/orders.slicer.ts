import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Order, AsyncState } from '../../models';
import axios from 'axios';

export const fetchOrders = createAsyncThunk('orders/fetchOrders', async () => {
  const data = await axios.get('http://localhost:3000/orders.json');
  return data.data;
});

const initialState: AsyncState<Order[]> = {
  error: '',
  initialState: [],
  status: 'idle',
};

export const ordersSlicer = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.initialState = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchOrders.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'unknown error';
      });
  },
});
