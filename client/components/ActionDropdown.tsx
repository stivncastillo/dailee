import React from "react";

import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";

import { VerticalDotsIcon } from "./icons";

export type ActionType = {
  name: string;
  trigger: () => void;
  color?:
    | "default"
    | "success"
    | "primary"
    | "secondary"
    | "warning"
    | "danger"
    | undefined;
  className?: string;
};

type Props = {
  actions: Array<ActionType>;
};

const ActionDropdown = ({ actions }: Props) => {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button isIconOnly size="sm" variant="light">
          <VerticalDotsIcon className="text-default-300" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu>
        {actions.map(({ trigger, name, color, className }) => (
          <DropdownItem
            key={name}
            onClick={trigger}
            color={color}
            className={className}
          >
            {name}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default ActionDropdown;
