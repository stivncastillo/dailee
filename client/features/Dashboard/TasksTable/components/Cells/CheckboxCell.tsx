import React from "react";

import { Checkbox } from "@nextui-org/react";

import { Task } from "@/graphql/codegen/graphql";

interface Props {
  task: Task;
}

const CheckboxCell = ({ task }: Props) => {
  return (
    <Checkbox
      defaultSelected={task.status === "done"}
      classNames={{ wrapper: "mr-0" }}
      color="success"
    ></Checkbox>
  );
};

export default CheckboxCell;
