import { Item } from './item.model';

export interface Order {
  isFetchedFromStorage: boolean;
  orderid: string;
  tip: number;
  discount: number;
  count: number;
  discountSum: number;
  dishesSum: number;
  totalSum: number;
  orderType: number;
  items: Item[];
  dinners: number;
  isSitting: boolean;
}
