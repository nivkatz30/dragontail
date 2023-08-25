import { useAppSelector } from '../../hooks/useAppSelector.hook';
import { Loader } from '../Shared/Loader';
import { OrdersList } from './OrdersList';
import './styles.scss';

export const Orders = () => {
  const orders = useAppSelector((s) => s.orders);

  if (orders.status === 'pending') {
    return <Loader />;
  }

  if (orders.status === 'failed') {
    return (
      <h1 className='error'>
        Error while fetching orders:
        <br />
        {orders.error}
      </h1>
    );
  }
  return <OrdersList orders={orders.initialState} />;
};
