import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { useQuery } from "@apollo/client";

import {
  ColumnType,
  RowType,
  generateDataGrid,
  getCurrentWeek,
} from "./utils/helpers";
import {
  GetHabitTrackingsDocument,
  GetHabitsDocument,
} from "@/graphql/codegen/graphql";

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
  const [columns, setColumns] = useState<ColumnType[]>([]);
  const today = useMemo(() => new Date(), []);
  const week = getCurrentWeek();

  const { data: dataHabits, loading: loadingHabits } = useQuery(
    GetHabitsDocument,
    {
      variables: {
        isPaused: false,
        dueDate: today,
      },
      fetchPolicy: "cache-and-network",
    },
  );

  const { data: dataHabitTrackings, loading: loadingHabitTracking } = useQuery(
    GetHabitTrackingsDocument,
    {
      variables: {
        dateStart: week[0].date,
        dateEnd: week[week.length - 1].date,
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
