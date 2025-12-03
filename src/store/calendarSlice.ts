import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import dayjs from '@/utils/dateTime';
import { Dayjs } from 'dayjs';
import { getMonth } from '@/utils/dateTime';

export interface CalendarState {
  month: number;
  currentDayInfo: Dayjs;
  calendarData: Dayjs[][];
}

const initialState: CalendarState = {
  month: dayjs().get('month'),
  currentDayInfo: dayjs(),
  calendarData: getMonth(),
};

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    setMonthDay(state, action: PayloadAction<number>) {
      const month = action.payload;
      state.month = month;
      state.calendarData = getMonth(month % 12);
    },
  },
});

export const { setMonthDay } = calendarSlice.actions;
export default calendarSlice.reducer;
