import React from "react";

import { Controller } from "react-hook-form";

import { Label } from "../ui/label";
import { Switch } from "../ui/switch";

export interface ControlledSwitchProps {
  id: string;
  label: string;
  control: any;
  rules?: any;
  name: string;
}

const ControlledSwitch: React.FC<ControlledSwitchProps> = ({
  id,
  control,
  name,
  rules,
  label,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, value, name, ref } }) => (
        <div className="flex items-center space-x-2">
          <Switch
            id={id}
            ref={ref}
            name={name}
            checked={value}
            onCheckedChange={onChange}
          />

          <Label htmlFor={id}>{label}</Label>
        </div>
      )}
    />
  );
};

export default ControlledSwitch;
