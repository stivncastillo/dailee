import React, { createContext, useContext, useMemo } from "react";

import { useQuery } from "@apollo/client";

import { COLUMNS } from "./utils/constants";
import {
  GetTasksDocument,
  SortOrder,
  Task,
  TasksComplexity,
} from "@/graphql/codegen/graphql";
import { endOfDayISO, startOfDayISO } from "@/helpers/date";
import useGetTaskComplexities from "@/hooks/useGetTaskComplexities";

export type TasksTableContextType = {
  loading: boolean;
  data: Array<Task>;
  columns: typeof COLUMNS;
  complexData: Array<TasksComplexity>;
  complexLoading: boolean;
  defaultComplex?: TasksComplexity | null;
};

const DEFAULT_VALUES = {
  data: [],
  loading: false,
  columns: COLUMNS,
  complexData: [],
  complexLoading: false,
  defaultComplex: null,
};

const TasksTableContext = createContext<TasksTableContextType>(DEFAULT_VALUES);

const TasksTableProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const todayStart = startOfDayISO();
  const todayEnd = endOfDayISO();

  const { data: complexData, loading: complexLoading } =
    useGetTaskComplexities();

  const { data, loading } = useQuery(GetTasksDocument, {
    variables: {
      where: {
        OR: [
          {
            completedDate: {
              equals: null,
            },
          },
          {
            completedDate: {
              gte: todayStart,
              lte: todayEnd,
            },
          },
        ],
      },
      orderBy: [
        { completedDate: SortOrder.Asc },
        {
          complexity: {
            id: SortOrder.Asc,
          },
        },
      ],
    },
    fetchPolicy: "cache-and-network",
  });

  const defaultComplex = useMemo(
    () => complexData?.taskComplexities.find((c) => c.name === "Low"),
    [complexData],
  );

  return (
    <TasksTableContext.Provider
      value={{
        data: data?.tasks ?? [],
        loading,
        columns: COLUMNS,
        complexData: complexData?.taskComplexities ?? [],
        complexLoading,
        defaultComplex,
      }}
    >
      {children}
    </TasksTableContext.Provider>
  );
};

const useTasksTableContext = () => {
  const context = useContext(TasksTableContext);
  if (context === undefined) {
    throw new Error(
      "useTasksTableContext must be used within a TasksTableProvider",
    );
  }
  return context;
};

export { TasksTableContext, TasksTableProvider, useTasksTableContext };
