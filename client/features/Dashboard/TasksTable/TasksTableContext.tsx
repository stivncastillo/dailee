import React, { createContext, useContext } from "react";

import { useQuery } from "@apollo/client";

import { COLUMNS } from "./utils/constants";
import { GetTasksDocument, SortOrder, Task } from "@/graphql/codegen/graphql";
import { endOfDayISO, startOfDayISO } from "@/helpers/date";

export type TasksTableContextType = {
  loading: boolean;
  data: Array<Task>;
  columns: typeof COLUMNS;
};

const DEFAULT_VALUES = {
  data: [],
  loading: false,
  columns: COLUMNS,
};

const TasksTableContext = createContext<TasksTableContextType>(DEFAULT_VALUES);

const TasksTableProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const todayStart = startOfDayISO();
  const todayEnd = endOfDayISO();

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
        {
          complexity: {
            id: SortOrder.Asc,
          },
        },
      ],
    },
    fetchPolicy: "cache-and-network",
  });

  return (
    <TasksTableContext.Provider
      value={{
        data: data?.tasks ?? [],
        loading,
        columns: COLUMNS,
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
