import { EqualityFn, useSelector } from 'react-redux';
import { AppStore } from '../redux';

export const useAppSelector = <T>(
  selector: (s: AppStore) => T,
  equalityFn?: EqualityFn<T>
) => {
  const data = useSelector(selector, equalityFn);
  return data;
};
