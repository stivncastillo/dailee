import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useQuery } from "@apollo/client";
import {
  GetHabitTrackingsDocument,
  GetHabitsDocument,
  HabitTrackingFieldsFragment,
} from "@/graphql/codegen/graphql";
import {
  ColumnType,
  RowType,
  generateDataGrid,
  getCurrentWeek,
} from "./utils/helpers";

export type HabitsTrackingContextType = {
  columns: ColumnType[];
  rows: RowType[];
};

const DEFAULT_VALUES = {
  columns: [],
  rows: [],
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

  const { data } = useQuery(GetHabitsDocument, {
    variables: {
      isPaused: false,
      dueDate: today,
    },
    fetchPolicy: "cache-and-network",
  });

  const { data: dataHabitTrackings, loading: loadingHabitTracking } = useQuery(
    GetHabitTrackingsDocument,
    {
      variables: {
        dateStart: week[0].date,
        dateEnd: week[week.length - 1].date,
      },
      fetchPolicy: "cache-and-network",
    }
  );

  useEffect(() => {
    if (data?.habits && data?.habits.length) {
      const { columns, rows } = generateDataGrid(
        data?.habits,
        dataHabitTrackings?.habitTrackings ?? []
      );
      setColumns(columns);
      setRows(rows);
    }
  }, [data?.habits, dataHabitTrackings?.habitTrackings]);

  return (
    <HabitsTrackingContext.Provider
      value={{
        columns,
        rows,
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
      "useHabitsTrackingContext must be used within a HabitsTrackingProvider"
    );
  }
  return context;
};

export {
  HabitsTrackingContext,
  HabitsTrackingProvider,
  useHabitsTrackingContext,
};
