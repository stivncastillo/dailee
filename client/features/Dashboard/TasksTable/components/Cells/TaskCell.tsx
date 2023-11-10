import React, { useMemo } from "react";

import { Tooltip } from "@nextui-org/react";

import { dotComplex, pointsText, taskTitle } from "./variants";
import useUpdateTask from "../../hooks/useUpdateTask";
import { ComplexType, StatusType } from "../../utils/@types";
import ActionDropdown, { ActionType } from "@/components/ActionDropdown";
import { Task } from "@/graphql/codegen/graphql";

interface Props {
  task: Task;
  status?: StatusType;
  complex?: ComplexType;
}

const getTooltipColor = (task: Task) => {
  if (task.complexId.name === "High") return "danger";
  if (task.complexId.name === "Medium") return "warning";

  return "default";
};

const TaskCell = ({ status = "todo", complex = "low", task }: Props) => {
  const { updateTask } = useUpdateTask();

  const handleCancelOrActivate = React.useCallback(async () => {
    await updateTask({
      id: task.id,
      status: task.status === "cancel" ? "todo" : "cancel",
    });
  }, [task, updateTask]);

  const actions = useMemo(() => {
    const actionsLet: Array<ActionType> = [];

    if (status !== "cancel")
      actionsLet.push({
        name: "Cancel",
        trigger: () => handleCancelOrActivate(),
        color: "danger",
        className: "text-danger",
      });
    if (status === "cancel")
      actionsLet.push({
        name: "Activate",
        trigger: () => handleCancelOrActivate(),
      });

    return actionsLet;
  }, [status, handleCancelOrActivate]);

  const tooltipColor = getTooltipColor(task);

  return (
    <>
      <div className=" flex flex-row items-center gap-2">
        <Tooltip size="sm" content={task.complexId.name} color={tooltipColor}>
          <span className={dotComplex({ complex })}></span>
        </Tooltip>
        <span className={taskTitle({ status })}>{task.title}</span>
        <span className={pointsText({ status })}>
          {task.points ?? task.complexId.points} points
        </span>
      </div>
      <div className="flex flex-row items-center gap-2">
        <span className={pointsText({ status, class: "text-sm" })}>
          {status !== "cancel" ? task.dueDate ?? "" : "canceled"}
        </span>
        <ActionDropdown actions={actions}></ActionDropdown>
      </div>
    </>
  );
};

export default TaskCell;
