import React from "react";

import { IoAddOutline } from "react-icons/io5";

type Props = {
  onClick: () => void;
};

const AddTaskButton = ({ onClick }: Props) => {
  return (
    <button
      className="flex flex-row items-center h-12 text-sm text-default-400 hover:underline"
      onClick={onClick}
    >
      <div className=" flex flex-row items-center w-5 mr-3">
        <span>
          <IoAddOutline size={20} className="mr-4" />
        </span>
      </div>{" "}
      <span>Add Task</span>
    </button>
  );
};

export default AddTaskButton;
