import React, { createContext, useContext, useState } from "react";

import { ApolloError } from "@apollo/client";

import useGetHabits from "@/hooks-api/useGetHabits";
import { Habit } from "@/lib/graphql/codegen/graphql";

export interface HabitsContextType {
  items: Habit[];
  loading: boolean;
  error?: ApolloError;
  habitToEdit: Habit | null;
  setHabitToEdit: (habit: Habit | null) => void;
}

const DEFAULT_VALUES = {
  items: [],
  loading: false,
  error: undefined,
  habitToEdit: null,
  setHabitToEdit: () => {},
};

const HabitsContext = createContext<HabitsContextType>(DEFAULT_VALUES);

const HabitsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { data, loading, error } = useGetHabits();
  const [habitToEdit, setHabitToEdit] = useState<Habit | null>(null);
  return (
    <HabitsContext.Provider
      value={{
        items: data?.habits ?? [],
        loading,
        error,
        habitToEdit,
        setHabitToEdit,
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
