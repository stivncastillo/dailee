import React, { useEffect } from "react";

import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IoCloseOutline, IoSave } from "react-icons/io5";

import { CreateTaskInputs } from "./@types";
import useCreateTask from "../../hooks/useCreateTask";
import { useTasksTableContext } from "../../TasksTableContext";

const INITIAL_VALUES = {
  id: "",
  title: "",
  dueDate: "",
  points: null,
  complexId: null,
};

type Props = {
  onClose?: () => void;
};

const TaskForm = ({ onClose }: Props) => {
  const { complexData: complexities, defaultComplex } = useTasksTableContext();
  const { createTask, loading, data, called } = useCreateTask();

  useEffect(() => {
    if (called && data?.createTask) {
      onClose && onClose();
    }
  }, [onClose, called, data?.createTask]);

  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<CreateTaskInputs>({
    values: {
      ...INITIAL_VALUES,
      complexId: defaultComplex?.id as string,
    },
    mode: "all",
  });

  const handleCreateTask: SubmitHandler<CreateTaskInputs> = async (data) => {
    await createTask({
      title: data.title,
      points: parseInt(`${data.points}`, 10),
      ...(data.dueDate ? { dueDate: data.dueDate } : {}),
      complexId: parseInt(data.complexId ?? "0", 10),
      completedDate: null,
      userId: "2102d189-3591-4b3b-9bc4-d6f0cc72510c",
    });
  };

  return (
    <div className="flex flex-row items-center">
      <button type="button" onClick={onClose}>
        <IoCloseOutline size={20} className="mr-2" />
      </button>

      <form
        onSubmit={handleSubmit(handleCreateTask)}
        className="flex flex-row gap-2 w-full items-end"
      >
        <Input
          autoFocus
          label="Title"
          variant="underlined"
          size="sm"
          className="flex-grow"
          disabled={loading}
          {...register("title", { required: true })}
        />
        <Select
          items={complexities}
          label="Complexity"
          size="sm"
          disabled={loading}
          variant="underlined"
          {...register("complexId", { required: true })}
        >
          {(complex) => (
            <SelectItem key={complex.id}>{complex.name}</SelectItem>
          )}
        </Select>
        <Input
          label="Due Date"
          type="date"
          variant="underlined"
          disabled={loading}
          size="sm"
          {...register("dueDate")}
        />
        <Input
          label="Points"
          type="number"
          variant="underlined"
          className=" w-60"
          disabled={loading}
          size="sm"
          {...register("points")}
        />
        <Button
          variant="solid"
          color="primary"
          isIconOnly
          size="sm"
          radius="sm"
          type="submit"
          disabled={loading}
        >
          <IoSave />
        </Button>
      </form>
    </div>
  );
};

export default TaskForm;
