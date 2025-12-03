import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/zh-tw';
import weekday from 'dayjs/plugin/weekday';
import localeData from 'dayjs/plugin/localeData';
import isLeapYear from 'dayjs/plugin/isLeapYear';
import isoWeek from 'dayjs/plugin/isoWeek';

dayjs.extend(weekday);
dayjs.extend(localeData);
dayjs.extend(isLeapYear);
dayjs.extend(isoWeek);

dayjs.locale('zh-tw');

export function getMonth(month = dayjs().month()): Dayjs[][] {
  const year = dayjs().year();

  const firstDayOfMonth = dayjs(new Date(year, month, 1));
  // （0=日 ~ 6=六）
  const firstDayWeekIndex = firstDayOfMonth.day();
  // 計算左上角就要從「1 - 3 = -2」開始
  let currentDayOffset = 1 - firstDayWeekIndex;

  // 4. 6 週 x 7 天
  const dayMatrix = new Array(6).fill(null).map(() => {
    return new Array(7).fill(null).map(() => {
      const date = dayjs(new Date(year, month, currentDayOffset));
      currentDayOffset++;
      return date;
    });
  });

  return dayMatrix;
}

export default dayjs;
