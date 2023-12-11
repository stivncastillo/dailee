import React from "react";

import { Controller } from "react-hook-form";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../ui/select";

type ControlledSelectProps = {
  control: any;
  name: string;
  options: { value: string; label: string }[];
  rules?: any;
  placeholder?: string;
};

const ControlledSelect: React.FC<ControlledSelectProps> = ({
  name,
  options,
  control,
  placeholder,
  rules,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, value } }) => (
        <Select onValueChange={onChange} defaultValue={value}>
          <SelectTrigger>
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent>
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}
    />
  );
};

export default ControlledSelect;
