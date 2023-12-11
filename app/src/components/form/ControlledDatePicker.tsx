import React from "react";

import { format } from "date-fns";
import { Controller } from "react-hook-form";

import { Icon } from "../icon";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

type ControlledDatePickerProps = {
  control: any;
  name: string;
  placeholder?: string;
  rules?: any;
};

const ControlledDatePicker: React.FC<ControlledDatePickerProps> = ({
  control,
  name,
  placeholder,
  rules,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { onChange, value },
        fieldState: { invalid, error },
      }) => (
        <>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "justify-start text-left font-normal",
                  !value && "text-muted-foreground",
                  invalid && "border-rose-500 text-rose-500 border-2",
                )}
              >
                <Icon name="calendar" className="mr-2 h-4 w-4" />
                {value ? format(value, "PPP") : <span>{placeholder}</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="bg-white w-auto p-0">
              <Calendar
                mode="single"
                selected={value}
                onSelect={onChange}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          {invalid && (
            <div className="text-sm text-rose-500">{error?.message}</div>
          )}
        </>
      )}
    />
  );
};

export default ControlledDatePicker;
