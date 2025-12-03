import { createHashRouter } from 'react-router';
import { Home } from '../pages/Home';

const routes = [
  { path: '/login' },
  {
    path: '/',
    element: <Home />,
  },
];

const router = createHashRouter(routes);

export default router;
