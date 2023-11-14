import React, { createContext, useContext, useEffect, useState } from "react";

import { useQuery } from "@apollo/client";
import dayjs from "dayjs";

import { ColumnType, RowType, generateDataGrid } from "./utils/helpers";
import {
  GetHabitTrackingsDocument,
  GetHabitsDocument,
} from "@/graphql/codegen/graphql";
import { getCurrentWeek, getEndOfDay, getStartOfDay } from "@/helpers/date";

export type HabitsTrackingContextType = {
  columns: ColumnType[];
  rows: RowType[];
  loading: boolean;
};

const DEFAULT_VALUES = {
  columns: [],
  rows: [],
  loading: false,
};

const HabitsTrackingContext =
  createContext<HabitsTrackingContextType>(DEFAULT_VALUES);

const HabitsTrackingProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [rows, setRows] = useState<RowType[]>([]);
  const [columns, setColumns] = useState<ColumnType[]>([
    { key: "habits", label: "Habits" },
  ]);
  const today = dayjs();
  const week = getCurrentWeek();

  const { data: dataHabits, loading: loadingHabits } = useQuery(
    GetHabitsDocument,
    {
      variables: {
        isPaused: false,
        dueDate: getEndOfDay(today.toString()),
      },
      fetchPolicy: "cache-and-network",
    },
  );

  const { data: dataHabitTrackings, loading: loadingHabitTracking } = useQuery(
    GetHabitTrackingsDocument,
    {
      variables: {
        dateStart: getStartOfDay(week[0].date),
        dateEnd: getEndOfDay(week[week.length - 1].date),
      },
      fetchPolicy: "cache-and-network",
    },
  );

  useEffect(() => {
    if (dataHabits?.habits && dataHabits?.habits.length) {
      const { columns, rows } = generateDataGrid(
        dataHabits?.habits,
        dataHabitTrackings?.habitTrackings ?? [],
      );
      setColumns(columns);
      setRows(rows);
    }
  }, [dataHabits?.habits, dataHabitTrackings?.habitTrackings]);

  return (
    <HabitsTrackingContext.Provider
      value={{
        columns,
        rows,
        loading: loadingHabits || loadingHabitTracking,
      }}
    >
      {children}
    </HabitsTrackingContext.Provider>
  );
};

const useHabitsTrackingContext = () => {
  const context = useContext(HabitsTrackingContext);
  if (context === undefined) {
    throw new Error(
      "useHabitsTrackingContext must be used within a HabitsTrackingProvider",
    );
  }
  return context;
};

export {
  HabitsTrackingContext,
  HabitsTrackingProvider,
  useHabitsTrackingContext,
};
