import { useMutation } from "@apollo/client";

import {
  CreateHabitTrackingInput,
  UpsertHabitTrackingDocument,
  UpsertHabitTrackingMutation,
  UpsertHabitTrackingMutationVariables,
} from "@/graphql/codegen/graphql";

const useCreateHabitTracking = () => {
  const [onCreate, { data, loading, error }] = useMutation<
    UpsertHabitTrackingMutation,
    UpsertHabitTrackingMutationVariables
  >(UpsertHabitTrackingDocument, { refetchQueries: "active" });

  const createHabitTracking = async ({
    points,
    date,
    habitId,
  }: Pick<
    CreateHabitTrackingInput,
    "habitId" | "points" | "date"
  >): Promise<void> => {
    await onCreate({
      variables: {
        createInput: {
          habitId,
          points,
          date,
          userId: "2102d189-3591-4b3b-9bc4-d6f0cc72510c",
        },
      },
    });
  };

  return { createHabitTracking, data, loading, error };
};

export default useCreateHabitTracking;
