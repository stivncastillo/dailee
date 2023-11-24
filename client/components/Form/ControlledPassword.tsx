import React, { useState } from "react";

import ControlledInput, { ControlledInputProps } from "./ControlledInput";
import { EyeFilledIcon, EyeSlashFilledIcon } from "../icons";

interface ControlledPasswordProps extends ControlledInputProps {}

const ControlledPassword = ({ control, ...props }: ControlledPasswordProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <ControlledInput
      control={control}
      variant="bordered"
      type={isVisible ? "text" : "password"}
      endContent={
        <button
          className="focus:outline-none"
          type="button"
          onClick={toggleVisibility}
        >
          {isVisible ? (
            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          ) : (
            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          )}
        </button>
      }
      {...props}
    />
  );
};

export default ControlledPassword;
