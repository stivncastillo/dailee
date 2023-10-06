import React, { useMemo } from "react";

import { Tooltip } from "@nextui-org/react";

import { dotComplex, pointsText, taskTitle } from "./variants";
import { ComplexType, StatusType } from "../../utils/@types";
import ActionDropdown, { ActionType } from "@/components/ActionDropdown";
import { Task } from "@/graphql/codegen/graphql";

interface Props {
  task: Task;
  status?: StatusType;
  complex?: ComplexType;
}

const TaskCell = ({ status = "todo", complex = "low", task }: Props) => {
  const actions = useMemo(() => {
    const actionsLet: Array<ActionType> = [];

    if (status !== "canceled")
      actionsLet.push({
        name: "Cancel",
        trigger: () => console.log("calceling"),
        color: "danger",
        className: "text-danger",
      });
    if (status === "canceled")
      actionsLet.push({
        name: "Activate",
        trigger: () => console.log("activating"),
      });

    return actionsLet;
  }, [status]);

  return (
    <>
      <div className=" flex flex-row items-center gap-2">
        <Tooltip content="High" color="primary">
          <span className={dotComplex({ complex })}></span>
        </Tooltip>
        <span className={taskTitle({ status })}>{task.title}</span>
        <span className={pointsText({ status })}>
          {task.points ?? task.complexId.points} points
        </span>
      </div>
      <div className="flex flex-row items-center gap-2">
        <span className={pointsText({ status, class: "text-sm" })}>
          {status !== "canceled" ? task.dueDate ?? "" : "canceled"}
        </span>
        <ActionDropdown actions={actions}></ActionDropdown>
      </div>
    </>
  );
};

export default TaskCell;
