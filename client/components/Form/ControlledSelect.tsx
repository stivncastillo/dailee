import React from "react";

import { Select, SelectItem, SelectProps } from "@nextui-org/react";
import { Controller } from "react-hook-form";

interface Props extends Omit<SelectProps, "children"> {
  control: any;
  rules?: any;
  name: string;
  items: Array<{ id: string | number; name: string }>;
}

const ControlledSelect: React.FC<Props> = ({
  control,
  rules,
  name,
  items,
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
        <Select
          ref={ref}
          name={name}
          items={items}
          size="sm"
          variant="underlined"
          selectedKeys={value}
          onChange={onChange}
          onBlur={onBlur}
          isInvalid={invalid}
          errorMessage={error?.message}
          {...rest}
        >
          {(item) => <SelectItem key={item.id}>{item.name}</SelectItem>}
        </Select>
      )}
    />
  );
};

export default ControlledSelect;
