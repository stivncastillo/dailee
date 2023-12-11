import React from "react";

import ControlledSwitch from "@/components/form/ControlledSwitch";

interface IsPausedFieldProps {
  control: any;
}

const IsPausedField: React.FC<IsPausedFieldProps> = ({ control }) => {
  return (
    <ControlledSwitch
      control={control}
      name="is_paused"
      label="Is Paused"
      id="is_paused"
    />
  );
};

export default IsPausedField;
