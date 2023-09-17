import {
  UpdateHabitDocument,
  UpdateHabitInput,
  UpdateHabitMutation,
  UpdateHabitMutationVariables,
} from "@/graphql/codegen/graphql";
import { useMutation } from "@apollo/client";

const useUpdatehabit = () => {
  const [onUpdateHabit, { data, loading, error }] = useMutation<
    UpdateHabitMutation,
    UpdateHabitMutationVariables
  >(UpdateHabitDocument, { refetchQueries: "active" });

  const updateHabit = async ({
    id,
    name,
    dueDate,
    isPaused = false,
  }: UpdateHabitInput): Promise<void> => {
    await onUpdateHabit({
      variables: {
        updateHabitInput: {
          id,
          isPaused,
          name,
          dueDate: dueDate === "" ? null : dueDate,
        },
      },
    });
  };

  return { updateHabit, data, loading, error };
};

export default useUpdatehabit;
