import React from "react";

import {
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Switch,
} from "@nextui-org/react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

import { useHabitsContext } from "../../HabitsContext";
import { useCreateHabit, useUpdateHabit } from "../../hooks/";

type CreateHabitInputs = {
  id: string;
  name: string;
  dueDate: string;
  isPaused: boolean;
};

type Props = {
  isOpen: boolean;
  onOpenChange: () => void;
};

const INITIAL_VALUES = {
  id: "",
  name: "",
  dueDate: "",
  isPaused: false,
};

const HabitFormModal = ({ isOpen, onOpenChange }: Props) => {
  const { habitToEdit, setHabitToEdit } = useHabitsContext();
  const { createHabit, loading: createHabitLoading } = useCreateHabit();
  const { updateHabit, loading: updateHabitLoading } = useUpdateHabit();

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm<CreateHabitInputs>({
    values: {
      id: habitToEdit?.id ?? INITIAL_VALUES.id,
      name: habitToEdit?.name ?? INITIAL_VALUES.name,
      dueDate: habitToEdit?.dueDate ?? INITIAL_VALUES.dueDate,
      isPaused: habitToEdit?.isPaused ?? INITIAL_VALUES.isPaused,
    },
  });

  const onSubmit: SubmitHandler<CreateHabitInputs> = async (data) => {
    if (habitToEdit) {
      await updateHabit(data);
      setHabitToEdit(null);
    } else {
      await createHabit(data);
    }
  };

  const loading = createHabitLoading || updateHabitLoading;

  return (
    <Modal
      backdrop="blur"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      onClose={() => {
        reset(INITIAL_VALUES);
      }}
      placement="top-center"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              {habitToEdit ? `Edit ${habitToEdit.name}` : "Create new habit"}
            </ModalHeader>
            <ModalBody>
              <Input
                autoFocus
                label="Name"
                variant="bordered"
                {...register("name", { required: true })}
              />
              <Input
                label="Due Date"
                type="date"
                variant="bordered"
                {...register("dueDate")}
              />
              <Controller
                control={control}
                name="isPaused"
                defaultValue={false}
                render={({ field: { onChange, value } }) => (
                  <Switch size="sm" isSelected={value} onValueChange={onChange}>
                    Is paused
                  </Switch>
                )}
              />
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="flat" onPress={onClose}>
                Cancel
              </Button>
              <Button
                isLoading={loading}
                isDisabled={!isValid}
                color="primary"
                onPress={() => {
                  handleSubmit(onSubmit)();
                  onClose();
                }}
              >
                {habitToEdit ? "Update" : "Create"}
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default HabitFormModal;
