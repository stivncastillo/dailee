import { useMutation } from "@apollo/client";

import {
  CreateHabitDocument,
  CreateHabitInput,
  CreateHabitMutation,
  CreateHabitMutationVariables,
  GetHabitsDocument,
} from "@/lib/graphql/codegen/graphql";

const useCreateHabit = () => {
  const [onCreateHabit, { data, loading, error }] = useMutation<
    CreateHabitMutation,
    CreateHabitMutationVariables
  >(CreateHabitDocument, {
    refetchQueries: [GetHabitsDocument],
  });

  const createHabit = async (data: CreateHabitInput): Promise<void> => {
    await onCreateHabit({
      variables: {
        createHabitInput: data,
      },
    });
  };

  return { createHabit, data, loading, error };
};

export default useCreateHabit;
