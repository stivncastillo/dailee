import React from "react";

import ControlledInput from "@/components/form/ControlledInput";

interface TargetFreqFieldProps {
  control: any;
}

const TargetFreqField: React.FC<TargetFreqFieldProps> = ({ control }) => {
  return (
    <ControlledInput
      control={control}
      placeholder="Target Frequency"
      name="target_frequency"
      type="number"
      rules={{
        required: "Target Frequency is required",
        min: {
          value: 0,
          message: "This cannot be less than 0",
        },
      }}
    />
  );
};

export default TargetFreqField;
