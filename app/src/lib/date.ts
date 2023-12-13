import { isSameDay, isBefore, startOfDay, differenceInDays } from 'date-fns';

/**
 * Compares two dates without considering the time
 * @param {Date} date1 - The first date
 * @param {Date} date2 - The second date
 * @returns {number} Returns 0 if the dates are the same, 1 if the first date is after the second, or -1 if the first date is before the second
 */
export function compareDates(date1: Date, date2: Date): number {
  const startOfDate1 = startOfDay(date1);
  const startOfDate2 = startOfDay(date2);

  if (isSameDay(startOfDate1, startOfDate2)) {
    return 0;
  } else if (isBefore(startOfDate1, startOfDate2)) {
    return -1;
  } else {
    return 1;
  }
}

/**
 * Calculates the number of days remaining until a certain date
 * @param {Date} date - The date to calculate the remaining days until
 * @returns {number} The number of days remaining
 */
export function getDaysRemaining(date: Date): number {
  const today = new Date();
  return differenceInDays(date, today);
}