import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import weekday from "dayjs/plugin/weekday";

dayjs.extend(weekday);
dayjs.extend(utc);
dayjs.extend(timezone);

export const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

export const startOfDayISO = () => {
  const startOfDay = new Date();
  startOfDay.setUTCHours(0, 0, 0, 0);
  return startOfDay.toISOString();
};

export const endOfDayISO = () => {
  const endOfDay = new Date();
  endOfDay.setUTCHours(23, 59, 59, 999);
  return endOfDay.toISOString();
};

export function getCurrentWeek() {
  const today = dayjs();
  const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
  const currentWeek = [];

  for (let i = 0; i < 7; i++) {
    const date = today.add(i - (today.day() - 1), "day");
    const dayOfWeek = daysOfWeek[i];
    const formattedDate = date.format("YYYY-MM-DD");

    currentWeek.push({ day: dayOfWeek, date: formattedDate });
  }

  return currentWeek;
}

export const isSameDate = (date1?: string, date2?: string) => {
  if (!date1 || !date2) return false;
  return dayjs(date1).isSame(dayjs(date2));
};

export const getStartOfDay = (date: string) => {
  if (!dayjs(date).isValid()) throw new Error(`${date} is not valid`);
  const fDate = dayjs(date).format("YYYY-MM-DD");
  return `${fDate}T00:00:00.000Z`;
};

export const getEndOfDay = (date: string) => {
  if (!dayjs(date).isValid()) throw new Error(`${date} is not valid`);
  const fDate = dayjs(date).format("YYYY-MM-DD");
  return `${fDate}T23:59:59.999Z`;
};
