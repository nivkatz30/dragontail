import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from 'react-router-dom';
import { Orders, Order } from './components';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchOrders } from './redux/slicers';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<any>(fetchOrders());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/orders' element={<Outlet />}>
          <Route index element={<Orders />} />
          <Route path=':id' element={<Order />} />
        </Route>
        <Route path='*' element={<Navigate to='/orders' replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
