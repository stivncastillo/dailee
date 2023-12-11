import React from "react";

import ControlledDatePicker from "@/components/form/ControlledDatePicker";
import { compareDates } from "@/lib/date";

interface DueDateFieldProps {
  control: any;
}

const DueDateField: React.FC<DueDateFieldProps> = ({ control }) => {
  return (
    <ControlledDatePicker
      name="due_date"
      placeholder="Due Date"
      control={control}
      rules={{
        validate: (value: Date) => {
          if (compareDates(value, new Date()) < 0) {
            return "Due Date cannot be in the past";
          }
          return true;
        },
      }}
    />
  );
};

export default DueDateField;
