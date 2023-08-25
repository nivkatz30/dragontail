import { Item } from '../models';

export const getOrderTotal = (items: Item[]) =>
  items.reduce((prev, item) => prev + item.price, 0);
