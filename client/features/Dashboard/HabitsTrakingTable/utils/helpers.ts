import { Habit, HabitTrackingFieldsFragment } from "@/graphql/codegen/graphql";
import { getCurrentWeek, isSameDate } from "@/helpers/date";

export type RowType = {
  key: string;
  habits: string;
  mon: number;
  tue: number;
  wed: number;
  thu: number;
  fri: number;
  sat: number;
  sun: number;
  habitItem: Habit;
};

export type ColumnType = { key: string; label: string; date?: string };

export function generateDataGrid(
  habits: Habit[],
  trackings: HabitTrackingFieldsFragment[],
): { columns: ColumnType[]; rows: RowType[] } {
  const columns = getColumns();
  const rows: any[] = [];
  habits.forEach((habit, index) => {
    const row = {
      key: (index + 1).toString(),
      habits: habit.name,
      habitItem: habit,
    };
    columns
      .filter((column) => column.key !== "habits")
      .forEach((column) => {
        const value = trackings.find((tracking) => {
          return (
            isSameDate(tracking.date.split("T")[0], column?.date) &&
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
    { key: "habits", label: "Habits" },
    ...weekDays.map((day) => ({
      key: day.day,
      label: day.day,
      date: day.date,
    })),
  ];
};
