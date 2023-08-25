import { useNavigate, useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks/useAppSelector.hook';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { Loader } from '../Shared/Loader';
import { OrderItem } from './OrderItem';
import { OrderApprove } from './OrderApprove';

export const Order = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const orders = useAppSelector((o) => o.orders);

  const [approve, setApprove] = useState(false);
  const order = useMemo(
    () => orders.initialState.find((o) => o.orderid === id),
    [id, orders.initialState]
  );

  const goBack = useCallback(() => navigate('/orders'), [navigate]);

  useEffect(() => {
    if (
      orders.status === 'failed' ||
      (orders.status === 'succeeded' && !order)
    ) {
      return goBack();
    }
  }, [goBack, id, order, orders.status]);

  if (!order || orders.status === 'pending') {
    return <Loader />;
  }

  return approve ? (
    <OrderApprove />
  ) : (
    <OrderItem order={order} onApprove={() => setApprove(true)} />
  );
};
