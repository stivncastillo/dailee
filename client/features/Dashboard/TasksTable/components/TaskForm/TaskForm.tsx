import React, { useEffect } from "react";

import { Button } from "@nextui-org/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IoCloseOutline, IoSave } from "react-icons/io5";

import { CreateTaskInputs } from "./@types";
import useCreateTask from "../../hooks/useCreateTask";
import { useTasksTableContext } from "../../TasksTableContext";
import { ControlledInput } from "@/components/Form";
import ControlledSelect from "@/components/Form/ControlledSelect";

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
  const { complexData: complexities } = useTasksTableContext();
  const { createTask, loading, data, called } = useCreateTask();

  useEffect(() => {
    if (called && data?.createTask) {
      onClose && onClose();
    }
  }, [onClose, called, data?.createTask]);

  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<CreateTaskInputs>({
    values: {
      ...INITIAL_VALUES,
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
        <ControlledInput
          name="title"
          control={control}
          autoFocus
          label="Title"
          isDisabled={loading}
          rules={{ required: true }}
        />
        <ControlledSelect
          label="Complexity"
          name="complexId"
          items={complexities}
          control={control}
          isDisabled={loading}
          rules={{ required: true }}
        />
        <ControlledInput
          name="dueDate"
          control={control}
          type="date"
          label="Due Date"
          isDisabled={loading}
        />
        <ControlledInput
          name="points"
          control={control}
          type="number"
          className="w-60"
          label="Points"
          isDisabled={loading}
          rules={{
            min: 0,
            max: 5,
          }}
        />
        <Button
          variant="solid"
          color="primary"
          isIconOnly
          size="sm"
          radius="sm"
          type="submit"
          isDisabled={loading || !isValid}
        >
          <IoSave />
        </Button>
      </form>
    </div>
  );
};

export default TaskForm;
