import React from "react";

import { Input, InputProps } from "@nextui-org/react";
import { Controller } from "react-hook-form";

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
          name={name}
          variant="underlined"
          size="sm"
          ref={ref}
          value={value as string}
          isInvalid={invalid}
          errorMessage={error?.message}
          onChange={onChange}
          onBlur={onBlur}
          {...rest}
        />
      )}
    />
  );
};

export default ControlledInput;
