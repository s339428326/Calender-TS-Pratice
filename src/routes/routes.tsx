import type { ReactNode } from 'react';
import { createHashRouter } from 'react-router';
import { Home } from '../pages/Home';
import { ShiftSchedule } from '../pages/ShiftSchedule';
import { Calendar, Home as HomeIcon, type LucideIcon } from 'lucide-react';

export type AppRoute = {
  path: string;
  title?: string;
  icon: LucideIcon; // 給 Sidebar 用（可以是可選）
  element?: ReactNode; // 給 React Router 用
  children?: AppRoute[]; // 子路由 / 子選單
};
export const routes: AppRoute[] = [
  // { path: '/login' },
  {
    path: '/',
    title: '首頁',
    icon: HomeIcon,
    element: <Home />,
  },
  {
    path: '/calender',
    title: '排班表',
    icon: Calendar,
    element: <ShiftSchedule />,
  },
];

const router = createHashRouter(routes);

export default router;
