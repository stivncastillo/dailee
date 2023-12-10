import React from "react";

import { Controller } from "react-hook-form";

import { Input, InputProps } from "../ui/input";

export interface ControlledInputProps extends InputProps {
  control: any;
  rules?: any;
  name: string;
}

const ControlledInput: React.FC<ControlledInputProps> = ({
  control,
  rules,
  name,
  ...rest
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({
        field: { onChange, onBlur, value, name, ref },
        fieldState: { invalid, error },
      }) => (
        <Input
          id={name}
          name={name}
          ref={ref}
          value={value as string}
          isInvalid={invalid}
          error={error?.message}
          onChange={onChange}
          onBlur={onBlur}
          label="Marica"
          {...rest}
        />
      )}
    />
  );
};

export default ControlledInput;
