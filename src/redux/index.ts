import { configureStore } from '@reduxjs/toolkit';
import { AsyncState, Order } from '../models/';
import { ordersSlicer } from './slicers';

export interface AppStore {
  orders: AsyncState<Order[]>;
}

export const store = configureStore<AppStore>({
  reducer: {
    orders: ordersSlicer.reducer,
  },
});
