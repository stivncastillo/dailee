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

type Props = {
  isOpen: boolean;
  onOpenChange: () => void;
};

type Inputs = {
  name: string;
  dueDate: string;
  isPaused: boolean;
};

const HabitFormModal = ({ isOpen, onOpenChange }: Props) => {
  const { createHabit, createHabitLoading } = useHabitsContext();
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(
      "👻 ~ file: HabitFormModal.tsx:36 ~ constonSubmit:SubmitHandler<Inputs>= ~ data:",
      data
    );
    await createHabit(data);
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Create new habit
            </ModalHeader>
            <ModalBody>
              <Input
                autoFocus
                label="Name"
                variant="bordered"
                {...register("name")}
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
                isLoading={createHabitLoading}
                color="primary"
                onPress={() => {
                  handleSubmit(onSubmit)();
                  onClose();
                }}
              >
                Create
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default HabitFormModal;
