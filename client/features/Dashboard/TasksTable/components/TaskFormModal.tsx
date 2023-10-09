import React from "react";

import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
} from "@nextui-org/react";

type CreateTaskInputs = {
  id: string;
  title: string;
  dueDate: string;
  userId: boolean;
  complexId: number;
  status: string;
};

type Props = {
  isOpen: boolean;
  onOpenChange: () => void;
};

const TaskFormModal = ({ isOpen, onOpenChange }: Props) => {
  return (
    <Modal
      backdrop="blur"
      radius="sm"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      onClose={() => {
        // reset(INITIAL_VALUES);
      }}
      placement="top-center"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Create new Task
            </ModalHeader>
            <ModalBody>
              <Input
                autoFocus
                label="Title"
                variant="bordered"
                // {...register("name", { required: true })}
              />

              <Select
                items={[{ label: "High", value: 1 }]}
                label="Complexity"
                placeholder="Select an complexity"
                variant="bordered"
                // className="max-w-xs"
              >
                {(animal) => (
                  <SelectItem key={animal.value}>{animal.label}</SelectItem>
                )}
              </Select>
              <Input
                label="Due Date"
                type="date"
                variant="bordered"
                // {...register("dueDate")}
              />

              <Input
                label="Points"
                variant="bordered"
                // {...register("name", { required: true })}
              />
            </ModalBody>
            <ModalFooter>
              <Button
                radius="sm"
                color="danger"
                variant="flat"
                onPress={onClose}
              >
                Cancel
              </Button>
              <Button
                radius="sm"
                // isLoading={loading}
                // isDisabled={!isValid}
                color="primary"
                onPress={() => {
                  // handleSubmit(onSubmit)();
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

export default TaskFormModal;
