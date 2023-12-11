import React from "react";

import ControlledDatePicker from "@/components/form/ControlledDatePicker";
import { compareDates } from "@/lib/date";

interface StartDateFieldProps {
  control: any;
}

const StartDateField: React.FC<StartDateFieldProps> = ({ control }) => {
  return (
    <ControlledDatePicker
      name="start_date"
      placeholder="Start Date"
      control={control}
      rules={{
        required: "Start Date is required",
        validate: (value: Date) => {
          if (compareDates(value, new Date()) < 0) {
            return "Start Date cannot be in the past";
          }
          return true;
        },
      }}
    />
  );
};

export default StartDateField;
