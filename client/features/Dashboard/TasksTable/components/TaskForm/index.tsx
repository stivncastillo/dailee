import React, { useState } from "react";

import AddTaskButton from "./AddTaskButton";
import TaskForm from "./TaskForm";

const TaskFormRow = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      {showForm ? (
        <TaskForm onClose={() => setShowForm(() => !showForm)} />
      ) : (
        <AddTaskButton onClick={() => setShowForm(() => !showForm)} />
      )}
    </>
  );
};

export default TaskFormRow;
