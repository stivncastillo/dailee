import * as React from "react";

import { cn } from "src/lib/utils";

import { Label } from "./label";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  isInvalid?: boolean;
  label?: string;
  endContent?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, isInvalid, label, endContent, ...props }, ref) => {
    return (
      <div className="mb-2">
        <Label className={cn(!label && "sr-only")} htmlFor={props.name}>
          {label ?? props.name}
        </Label>
        <div className="flex relative bg-blue-500">
          <input
            type={type}
            className={cn(
              "flex h-10 w-full rounded-sm border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
              isInvalid &&
                "border-2 border-rose-500 focus-visible:ring-rose-300 ",
              className,
            )}
            ref={ref}
            {...props}
          />
          {endContent && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center ">
              {endContent}
            </div>
          )}
        </div>
        {/* Add this line */}
        {isInvalid && error && (
          <div className="text-sm text-rose-500 mt-1">{error}</div>
        )}
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
