import React from "react";

import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  useDisclosure,
} from "@nextui-org/react";

import useDeleteHabits from "../../hooks/useDeletehabits";
import { DeleteModal } from "@/components/Modals";

type Props = {
  isDisabled?: boolean;
  items: Array<string>;
};

const BulkActions = ({ isDisabled = false, items }: Props) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { deleteHabits } = useDeleteHabits();
  return (
    <>
      <Dropdown>
        <DropdownTrigger>
          <Button
            radius="sm"
            color="primary"
            variant="bordered"
            isDisabled={isDisabled}
          >
            Actions
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Bulk actions">
          <DropdownItem
            key="delete"
            className="text-danger"
            color="danger"
            onClick={onOpen}
          >
            Delete
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>

      <DeleteModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        onDelete={async () => {
          await deleteHabits({ ids: items });
        }}
        deleteText={`Do you want delete these ${items.length} habits?`}
      />
    </>
  );
};

export default BulkActions;
