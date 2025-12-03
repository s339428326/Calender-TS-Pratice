import React from 'react';
import { cn } from '@/utils/cn';

import { Dayjs } from 'dayjs';
import dayjs from '@/utils/dateTime';

import { useSelector, useDispatch } from 'react-redux';
import { setMonthDay } from '@/store/calendarSlice';
import { type CalendarState } from '@/store/calendarSlice';
import { type RootState } from '../store';

interface DayProps {
  coordinate: [number, number];
  state: CalendarState;
  day: Dayjs;
  isLast: boolean;
}

interface CalendarHeaderProps {
  state: CalendarState;
}

const Day = ({ coordinate, state, day, isLast }: DayProps) => {
  const handlerDayEvent = (key: string) => (e: HTMLSpanElement) => {
    switch (key) {
      case 'dayClick':
        break;

      default:
        console.log('handler ket is undefined!!');
        break;
    }
  };

  return (
    <div
      className={cn(
        'p-3 hover:bg-gray-50 transition-all',
        isLast && 'border-r border-b border-gray-200',
        coordinate[0] === 0 && coordinate[1] === 5 && 'rounded-bl-xl',
        coordinate[0] === 6 && coordinate[1] === 5 && 'rounded-br-xl'
      )}
    >
      <div
        className={cn(
          'rounded-full p-1 font-bold w-8 flex justify-center items-center',
          dayjs().month(state.month).get('month') !== day.get('month') &&
            'text-gray-400',
          state.currentDayInfo.format('DD/MM/YYYY') ==
            day.format('DD/MM/YYYY') && 'bg-purple-600 text-white'
        )}
      >
        {day.format('D')}
      </div>
    </div>
  );
};

const WeekBar = () => {
  const weekLabels = Array.from({ length: 7 }).map((_, i) =>
    dayjs().weekday(i).format('ddd')
  );

  return (
    <div className="grid grid-cols-7 text-center bg-gray-50 border-t border-gray-200">
      {weekLabels.map((label, i) => (
        <div
          key={i}
          className={cn(
            'border-l border-gray-200 p-2 font-bold text-gray-400 text-sm',
            i == weekLabels.length - 1 && 'border-r'
          )}
        >
          {label}
        </div>
      ))}
    </div>
  );
};

const CalendarHeader = ({ state }: CalendarHeaderProps) => {
  const dispatch = useDispatch();

  const handlerMonth =
    (name: 'prev' | 'next' | 'today') =>
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      switch (name) {
        case 'prev':
          dispatch(setMonthDay(state.month - 1));
          break;
        case 'next':
          dispatch(setMonthDay(state.month + 1));
          break;
        default:
          dispatch(setMonthDay(state.currentDayInfo.get('month')));
          break;
      }
    };

  return (
    <section className="border-t border-l border-r rounded-t-2xl px-4 py-6">
      <div className="flex gap-4">
        {/* block 1 */}
        <div className="border rounded w-32">
          <div className="bg-gray-100 text-center font-bold text-gray-400 text-xl py-2">
            {state.currentDayInfo.format('MMM')}
          </div>
          <div className="text-purple-500 text-4xl font-extrabold text-center py-2 font-mono ">
            {state.currentDayInfo.format('D')}
          </div>
        </div>
        {/* block 2 */}
        <div>
          <div className="flex flex-col h-fit">
            <span className="font-bold text-xl">
              {dayjs().month(state.month).locale('en').format('MMMM')}{' '}
              {dayjs().month(state.month).get('month') + 1}
              {'月 ,'}
              {dayjs().month(state.month).get('year')}
            </span>
          </div>
        </div>
        {/* block 3 */}
        <div className="flex flex-col ml-auto">
          <div className="border rounded-l-md rounded-r-md mb-auto">
            <button
              type="button"
              className="p-4"
              onClick={handlerMonth('prev')}
            >
              L
            </button>
            <button type="button" className="py-4 px-2 border-l border-r">
              {state.month}
              Today {}
            </button>
            <button
              type="button"
              className="p-4"
              onClick={handlerMonth('next')}
            >
              R
            </button>
          </div>
          <button type="button" className="btn">
            匯入
          </button>
        </div>
      </div>
    </section>
  );
};

export const Calendar = () => {
  const state = useSelector((state: RootState) => state.calendar);

  console.log(state.calendarData);

  return (
    <div className="h-screen">
      <CalendarHeader state={state} />
      <WeekBar />
      <div
        className="
        min-h-screen grid grid-rows-6 grid-cols-7 
        divide-x divide-y divide-gray-200 border-gray-200
        border-t border-l
        rounded-bl-xl rounded-br-xl 
        overflow-hidden"
      >
        {state.calendarData.map((weekArr, weekIndex) => (
          <React.Fragment key={weekIndex}>
            {weekArr.map((dayInfo: Dayjs, dayIndex) => {
              const isLast =
                weekIndex === state.calendarData.length - 1 &&
                dayIndex === weekArr.length - 1;

              return (
                <Day
                  state={state}
                  key={dayIndex}
                  coordinate={[dayIndex, weekIndex]}
                  day={dayInfo}
                  isLast={isLast}
                />
              );
            })}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
