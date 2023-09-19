import { Habit, HabitTrackingFieldsFragment } from "@/graphql/codegen/graphql";
import dayjs from "dayjs";

const daysOfWeek = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

export type RowType = {
  key: string,
  habits: string,
  mon: number,
  tue: number,
  wed: number,
  thu: number,
  fri: number,
  sat: number,
  sun: number,
  habitItem: Habit
}

export type ColumnType = {key: string, label: string, date?: string}

export function generateDataGrid(habits: Habit[], trackings: HabitTrackingFieldsFragment[]): {columns: ColumnType[], rows: RowType[]} {
  const columns = getColumns();
  const rows: any[] = [];
  habits.forEach((habit, index) => {
    const row = {
      key: (index + 1).toString(),
      habits: habit.name,
      habitItem: habit
    };
    columns
      .filter((column) => column.key !== "habits")
      .forEach((column) => {
        const value = trackings.find((tracking) => {
          return (
            dayjs(tracking.date.split("T")[0]).isSame(dayjs(column?.date)) &&
            tracking.habitId.id === habit.id
          );
        });
        //@ts-ignore
        row[column.key] = value?.points ?? 0;
      });

    rows.push(row);
  });

  return { columns, rows };
}

export const getColumns = (): ColumnType[] => {
  const weekDays = getCurrentWeek();
  return [
    {key: 'habits', label: 'Habits'},
    ...weekDays.map(day => ({key: day.day, label: day.day, date: day.date}))
  ]
}

export function getCurrentWeek(): { day: string; date: string }[] {
  const today = new Date();
  const currentDayOfWeek = today.getDay(); // 0 (Sunday) to 6 (Saturday)
  const currentWeek: { day: string; date: string }[] = [];

  for (let i = 0; i < 7; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i - currentDayOfWeek + 1); // Start from Monday

    const dayOfWeek = daysOfWeek[i];
    const formattedDate = date.toISOString().split('T')[0]; // Get the date in "YYYY-MM-DD" format

    currentWeek.push({ day: dayOfWeek, date: formattedDate });
  }

  return currentWeek;
}