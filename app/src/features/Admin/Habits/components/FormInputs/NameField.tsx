import React from "react";

import ControlledInput from "@/components/form/ControlledInput";

interface NameFieldProps {
  control: any;
}

const NameField: React.FC<NameFieldProps> = ({ control }) => {
  return (
    <ControlledInput
      control={control}
      placeholder="Name"
      name="name"
      type="text"
      rules={{
        required: "Name is required",
      }}
    />
  );
};

export default NameField;
