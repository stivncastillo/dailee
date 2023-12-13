import React from "react";

import { VariantProps, cva } from "class-variance-authority";

import { Icon } from "../icon";
import { cn } from "@/lib/utils";

const spinnerVariants = cva("h-4 w-4 animate-spin", {
  variants: {
    size: {
      default: "h-4 w-4",
      sm: "h-3 w-3",
      lg: "h-6 w-6",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface SpinnerProps extends VariantProps<typeof spinnerVariants> {}

const Spinner: React.FC<SpinnerProps> = ({ size }) => {
  return <Icon name="loader-2" className={cn(spinnerVariants({ size }))} />;
};

export default Spinner;
