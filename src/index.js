import holidaysList from './data/holidays';
import namedaysList from './data/namedays';
import { getEasterMonday, getBigFriday } from './easter';
import { isSameDay, getIndexFromDate } from './utils';

export function getHolidays(date = new Date()) {
  if (!(date instanceof Date)) {
    throw new Error('date must be instance of Date');
  }

  const index = getIndexFromDate(date);
  const holidays = [...holidaysList[index]];

  const year = date.getFullYear();
  const easterMondayDate = getEasterMonday(year);
  const bigFridayDate = getBigFriday(year);

  if (isSameDay(easterMondayDate, date)) {
    holidays.push('Velikonoční pondělí');
  } else if (isSameDay(bigFridayDate, date)) {
    holidays.push('Velký pátek');
  }

  return holidays;
}

export function getNamedays(date = new Date()) {
  if (!(date instanceof Date)) {
    throw new Error('date must be instance of Date');
  }

  const index = getIndexFromDate(date);
  const namedays = [...namedaysList[index]];

  return namedays;
}

export function getAll(date) {
  return {
    holidays: getHolidays(date),
    namedays: getNamedays(date)
  };
}
