export interface AsyncState<T> {
  initialState: T;
  error: string;
  status: 'idle' | 'pending' | 'succeeded' | 'failed';
}
