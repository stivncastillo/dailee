import { FetchResult, useMutation } from "@apollo/client";

import {
  UpdateTaskDocument,
  UpdateTaskInput,
  UpdateTaskMutation,
  UpdateTaskMutationVariables,
  GetTasksDocument,
  GetWeeklyPointsDocument,
} from "@/graphql/codegen/graphql";

const useUpdateTask = () => {
  const [onUpdateTask, { data, loading, error, called }] = useMutation<
    UpdateTaskMutation,
    UpdateTaskMutationVariables
  >(UpdateTaskDocument, {
    refetchQueries: [GetTasksDocument, GetWeeklyPointsDocument],
  });

  const updateTask = async (
    data: UpdateTaskInput,
  ): Promise<FetchResult<UpdateTaskMutation>> => {
    return await onUpdateTask({
      variables: {
        updateTaskInput: {
          ...data,
        },
      },
    });
  };

  return { updateTask, data, loading, error, called };
};

export default useUpdateTask;
