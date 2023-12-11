import React from "react";

import ControlledSelect from "@/components/form/ContolledSelect";
import { DIFFICULTY_OPTIONS } from "@/lib/config";

interface DifficultyFieldProps {
  control: any;
}

const DifficultyField: React.FC<DifficultyFieldProps> = ({ control }) => {
  return (
    <ControlledSelect
      name="difficulty"
      control={control}
      options={DIFFICULTY_OPTIONS}
      placeholder="Difficulty"
      rules={{
        required: "Difficulty is required",
      }}
    />
  );
};

export default DifficultyField;
