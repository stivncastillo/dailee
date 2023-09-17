import {
  GetHabitsDocument,
  Habit,
  CreateHabitDocument,
  CreateHabitMutation,
  CreateHabitMutationVariables,
  CreateHabitInput,
} from "@/graphql/codegen/graphql";
import React, { createContext, useContext } from "react";
import { ApolloError, useMutation, useQuery } from "@apollo/client";
import { useDisclosure } from "@nextui-org/react";

export type HabitsContextType = {
  items: Habit[];
  loading: boolean;
  error?: ApolloError;
  isOpenModal: boolean;
  onOpenModal: () => void;
  onOpenChangeModal: () => void;
  createHabit: (data: CreateHabitInput) => Promise<void>;
  createHabitData: Habit | null;
  createHabitLoading: boolean;
  createHabitError?: ApolloError;
};

const DEFAULT_VALUES = {
  items: [],
  loading: false,
  isOpenModal: false,
  onOpenModal: () => {},
  onOpenChangeModal: () => {},
  createHabit: async () => {},
  createHabitData: null,
  createHabitLoading: false,
};

const HabitsContext = createContext<HabitsContextType>(DEFAULT_VALUES);

const HabitsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { data, loading, error } = useQuery(GetHabitsDocument, {
    fetchPolicy: "cache-and-network",
  });
  const [
    onCreateHabit,
    {
      data: createHabitData,
      loading: createHabitLoading,
      error: createHabitError,
    },
  ] = useMutation<CreateHabitMutation, CreateHabitMutationVariables>(
    CreateHabitDocument,
    { refetchQueries: "active" }
  );

  const createHabit = async ({
    name,
    dueDate,
    isPaused = false,
  }: CreateHabitInput): Promise<void> => {
    await onCreateHabit({
      variables: {
        createHabitInput: {
          isPaused,
          name,
          dueDate: dueDate === "" ? null : dueDate,
        },
      },
    });
  };

  return (
    <HabitsContext.Provider
      value={{
        items: data?.habits ?? [],
        loading,
        error,
        createHabit,
        createHabitData: createHabitData?.createHabit ?? null,
        createHabitLoading,
        createHabitError,
        isOpenModal: isOpen,
        onOpenModal: onOpen,
        onOpenChangeModal: onOpenChange,
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
