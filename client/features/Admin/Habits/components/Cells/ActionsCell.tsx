import { VerticalDotsIcon } from "@/components/icons";
import { Habit } from "@/graphql/codegen/graphql";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import React from "react";

type Props = {
  habit: Habit;
  onEdit: () => void;
  onDelete: () => void;
};

const ActionsCell = ({ habit, onEdit, onDelete }: Props) => {
  return (
    <div className="relative flex justify-center items-center gap-2">
      <Dropdown>
        <DropdownTrigger>
          <Button isIconOnly size="sm" variant="light">
            <VerticalDotsIcon className="text-default-300" />
          </Button>
        </DropdownTrigger>
        <DropdownMenu>
          <DropdownItem onClick={onEdit}>Edit</DropdownItem>
          <DropdownItem
            onClick={onDelete}
            className="text-danger"
            color="danger"
          >
            Delete
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default ActionsCell;
