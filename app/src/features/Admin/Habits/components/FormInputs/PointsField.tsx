import React from "react";

import ControlledInput from "@/components/form/ControlledInput";

interface PointsFieldProps {
  control: any;
}

const PointsField: React.FC<PointsFieldProps> = ({ control }) => {
  return (
    <ControlledInput
      control={control}
      placeholder="Points"
      name="points"
      type="number"
      rules={{
        max: {
          value: 10,
          message: "Points cannot be greater than 10",
        },
        min: {
          value: 0,
          message: "Points cannot be less than 0",
        },
      }}
    />
  );
};

export default PointsField;
