import React from "react";

import { TasksTableProvider } from "./TasksTableContext";
import TaskTable from "./TaskTable";

const TasksTableContainer = () => {
  return (
    <TasksTableProvider>
      <TaskTable />
    </TasksTableProvider>
  );
};

export default TasksTableContainer;
