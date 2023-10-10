import { useMutation } from "@apollo/client";

import {
  CreateHabitDocument,
  CreateHabitInput,
  CreateHabitMutation,
  CreateHabitMutationVariables,
  GetHabitTrackingsDocument,
  GetHabitsDocument,
} from "@/graphql/codegen/graphql";

const useCreateHabit = () => {
  const [onCreateHabit, { data, loading, error }] = useMutation<
    CreateHabitMutation,
    CreateHabitMutationVariables
  >(CreateHabitDocument, {
    refetchQueries: [GetHabitsDocument, GetHabitTrackingsDocument],
  });

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

  return { createHabit, data, loading, error };
};

export default useCreateHabit;
