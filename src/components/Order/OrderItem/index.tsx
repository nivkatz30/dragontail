import { Button, Grid, List, ListItem, Typography } from '@mui/material';
import { Order } from '../../../models';
import { useMemo } from 'react';
import { getOrderTotal } from '../../../utils/order.utils';
import './styles.scss';

interface Props {
  order: Order;
  onApprove: () => void;
}

export const OrderItem = ({ order, onApprove }: Props) => {
  const orderTotal = useMemo(() => getOrderTotal(order.items), [order.items]);

  return (
    <Grid container mt={5}>
      <Grid item xl={4} md={3} xs={1} />
      <Grid item xl={4} md={6} xs={10}>
        <Typography variant='h4' textAlign='center' width='100%'>
          Order {order.orderid}
        </Typography>
        <List className='full-width'>
          {order.items.map((item) => (
            <ListItem key={item.uId} className='order-item-container'>
              <Typography flex={1} textAlign='left'>
                ${item.price}
              </Typography>
              <Typography flex={1}>
                {item.itemName}{' '}
                <Typography component='span' color='gray' fontSize='12px'>
                  x{item.quantity}
                </Typography>
              </Typography>
            </ListItem>
          ))}
        </List>
        <Grid display='flex' mt={2} mb={3}>
          <Typography flex={1}>total: ${orderTotal}</Typography>
          <Typography flex={1} textAlign='right'>
            items count: {order.items.length}
          </Typography>
        </Grid>
        <Button onClick={onApprove} fullWidth variant='contained'>
          Next
        </Button>
      </Grid>
    </Grid>
  );
};
