import React from "react";

import ControlledInput from "@/components/form/ControlledInput";

interface CurrentFreqFieldProps {
  control: any;
}

const CurrentFreqField: React.FC<CurrentFreqFieldProps> = ({ control }) => {
  return (
    <ControlledInput
      control={control}
      placeholder="Current Frequency"
      name="current_frequency"
      type="number"
      rules={{
        required: "Current Frequency is required",
        min: {
          value: 0,
          message: "This cannot be less than 0",
        },
      }}
    />
  );
};

export default CurrentFreqField;
