import React from "react";

import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import {
  Tooltip as TooltipComponent,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface TooltipProps extends TooltipPrimitive.TooltipProviderProps {
  children: React.ReactNode;
  text: string;
}

const Tooltip: React.FC<TooltipProps> = ({ children, text }) => {
  return (
    <TooltipProvider>
      <TooltipComponent>
        <TooltipTrigger>{children}</TooltipTrigger>
        <TooltipContent>
          <p>{text}</p>
        </TooltipContent>
      </TooltipComponent>
    </TooltipProvider>
  );
};

export default Tooltip;
