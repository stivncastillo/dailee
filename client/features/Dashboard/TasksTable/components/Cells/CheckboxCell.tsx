import React from "react";

import { Checkbox } from "@nextui-org/react";

import useUpdateTask from "../../hooks/useUpdateTask";
import { Task } from "@/graphql/codegen/graphql";

interface Props {
  task: Task;
}

const CheckboxCell = ({ task }: Props) => {
  const { updateTask } = useUpdateTask();

  const handleCheckboxChange = React.useCallback(
    async (value: boolean) => {
      await updateTask({
        id: task.id,
        status: value ? "done" : "pending",
      });
    },
    [task, updateTask],
  );
  return (
    <Checkbox
      defaultSelected={task.status === "done"}
      onValueChange={handleCheckboxChange}
      classNames={{ wrapper: "mr-0" }}
      color="success"
    ></Checkbox>
  );
};

export default CheckboxCell;
