import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

import { ApolloError, useQuery } from "@apollo/client";

import { COLUMNS } from "./utils/constants";
import { GetHabitsDocument, Habit } from "@/graphql/codegen/graphql";

export type HabitsContextType = {
  items: Habit[];
  loading: boolean;
  error?: ApolloError;
  habitToEdit: Habit | null;
  setHabitToEdit: Dispatch<SetStateAction<Habit | null>>;
  habitToDelete: Habit | null;
  setHabitToDelete: Dispatch<SetStateAction<Habit | null>>;
  columns: typeof COLUMNS;
};

const DEFAULT_VALUES = {
  items: [],
  loading: false,
  habitToEdit: null,
  setHabitToEdit: () => {},
  habitToDelete: null,
  setHabitToDelete: () => {},
  columns: [],
};

const HabitsContext = createContext<HabitsContextType>(DEFAULT_VALUES);

const HabitsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [habitToEdit, setHabitToEdit] = useState<Habit | null>(null);
  const [habitToDelete, setHabitToDelete] = useState<Habit | null>(null);
  const { data, loading, error } = useQuery(GetHabitsDocument, {
    fetchPolicy: "cache-and-network",
  });

  return (
    <HabitsContext.Provider
      value={{
        items: data?.habits ?? [],
        loading,
        error,
        habitToEdit,
        setHabitToEdit,
        habitToDelete,
        setHabitToDelete,
        columns: COLUMNS,
      }}
    >
      {children}
    </HabitsContext.Provider>
  );
};

const useHabitsContext = () => {
  const context = useContext(HabitsContext);
  if (context === undefined) {
    throw new Error("useHabitsContext must be used within a HabitsProvider");
  }
  return context;
};

export { HabitsContext, HabitsProvider, useHabitsContext };
