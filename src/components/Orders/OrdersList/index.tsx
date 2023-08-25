import {
  Avatar,
  Divider,
  Grid,
  List,
  ListItemAvatar,
  ListItemButton,
  Typography,
} from '@mui/material';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { Order } from '../../../models';
import './styles.scss';
import { useNavigate } from 'react-router-dom';
import { getOrderTotal } from '../../../utils/order.utils';

interface Props {
  orders: Order[];
}

export const OrdersList = ({ orders }: Props) => {
  const navigate = useNavigate();

  return (
    <Grid container mt={5}>
      <Typography variant='h4' width='100%' textAlign='center'>
        Orders
      </Typography>
      <div className='divider-container'>
        <Divider className='divider' />
      </div>
      <List className='full-width'>
        {orders.map((order) => (
          <ListItemButton
            onClick={() => navigate(`${order.orderid}`)}
            key={order.orderid}
            className='item-container'
          >
            <ListItemAvatar>
              <Avatar>
                <FastfoodIcon />
              </Avatar>
            </ListItemAvatar>
            <div>
              <Typography variant='h6'>order {order.orderid}</Typography>
              <span className='item'>items count: {order.items.length}</span>
              <span className='item price'>
                items sum: ${getOrderTotal(order.items)}
              </span>
            </div>
          </ListItemButton>
        ))}
      </List>
    </Grid>
  );
};
