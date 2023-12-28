import { useMutation } from "@apollo/client";

import {
  DeleteHabitLogDocument,
  DeleteHabitLogMutation,
  DeleteHabitLogMutationVariables,
  DeleteHabitLogInput,
} from "@/lib/graphql/codegen/graphql";

const useDeleteHabitLog = () => {
  const [onDeleteHabitLog, { data, loading, error }] = useMutation<
    DeleteHabitLogMutation,
    DeleteHabitLogMutationVariables
  >(DeleteHabitLogDocument, { refetchQueries: "active" });

  const deleteHabitLog = async ({ habit_id }: DeleteHabitLogInput): Promise<void> => {
    await onDeleteHabitLog({
      variables: {
        deleteHabitLogInput: {
          habit_id
        }
      },
    });
  };

  return { deleteHabitLog, data, loading, error };
};

export default useDeleteHabitLog;
