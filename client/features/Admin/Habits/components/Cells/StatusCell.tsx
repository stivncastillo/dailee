import React from "react";

import { Chip } from "@nextui-org/react";

type Props = {
  value: boolean;
};

const StatusCell = ({ value }: Props) => {
  return (
    <Chip size="sm" color={value ? "warning" : "success"} variant="flat">
      {value ? "Paused" : "Active"}
    </Chip>
  );
};

export default StatusCell;
