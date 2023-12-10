import { useState } from "react";

import ControlledInput, { ControlledInputProps } from "./ControlledInput";
import { Icon } from "../icon";

interface ControlledPasswordProps extends ControlledInputProps {
  showToggle?: boolean;
}

const ControlledPassword = ({
  control,
  showToggle = true,
  ...props
}: ControlledPasswordProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <ControlledInput
      control={control}
      type={isVisible ? "text" : "password"}
      endContent={
        <button
          className="focus:outline-none text-gray-500"
          type="button"
          onClick={toggleVisibility}
        >
          {isVisible && showToggle ? (
            <Icon name="eye-off" className="text-xl pointer-events-none" />
          ) : (
            <Icon name="eye" className="text-xl pointer-events-none" />
          )}
        </button>
      }
      {...props}
    />
  );
};

export default ControlledPassword;
