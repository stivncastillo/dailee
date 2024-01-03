"use client";

import * as React from "react";

import * as ProgressPrimitive from "@radix-ui/react-progress";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "src/lib/utils";

const progressVariants = cva(
  "relative w-full overflow-hidden rounded-full bg-gray-100",
  {
    variants: {
      variant: {
        default: "bg-primary-100",
        secondary: "bg-secondary-100",
        destructive: "bg-error-100",
        info: "bg-info-100",
        success: "bg-success-100",
        warning: "bg-warning-100",
      },
      size: {
        default: "h-4",
        sm: "h-2",
        lg: "h-6",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const progressBarVariants = cva(
  "h-full w-full flex-1 bg-primary transition-all",
  {
    variants: {
      variant: {
        default: "bg-primary",
        secondary: "bg-secondary",
        destructive: "bg-error",
        info: "bg-info",
        success: "bg-success",
        warning: "bg-warning",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

interface ProgressProps extends VariantProps<typeof progressVariants> {
  value?: number;
  max?: number;
  className?: string;
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, value, variant, size, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(progressVariants({ variant, size, className }))}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className={cn(progressBarVariants({ variant, className }))}
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
