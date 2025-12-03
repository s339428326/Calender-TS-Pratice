import { configureStore } from '@reduxjs/toolkit';
import calendarReducer from '@/store/calendarSlice';

export const store = configureStore({
  reducer: {
    calendar: calendarReducer,
  },
});

// 推導出 RootState / AppDispatch 型別給 React 使用
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
