import { useMutation } from "@apollo/client";

import {
  DeleteHabitDocument,
  DeleteHabitInput,
  DeleteHabitMutation,
  DeleteHabitMutationVariables,
} from "@/graphql/codegen/graphql";

const useDeleteHabit = () => {
  const [onDeleteHabit, { data, loading, error }] = useMutation<
    DeleteHabitMutation,
    DeleteHabitMutationVariables
  >(DeleteHabitDocument, { refetchQueries: "active" });

  const deleteHabit = async ({ id }: DeleteHabitInput): Promise<void> => {
    await onDeleteHabit({
      variables: {
        deleteHabitInput: {
          id,
        },
      },
    });
  };

  return { deleteHabit, data, loading, error };
};

export default useDeleteHabit;
