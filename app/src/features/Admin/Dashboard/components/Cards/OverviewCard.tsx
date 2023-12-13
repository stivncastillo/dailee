import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface OverviewCardProps {
  title: string;
  value: string | number | React.ReactNode;
  caption?: string | number | React.ReactNode;
  className?: string;
}

const OverviewCard: React.FC<OverviewCardProps> = ({
  title,
  value,
  caption,
  className,
}) => {
  return (
    <Card className={cn(className)}>
      <CardHeader className="flex flex-row justify-center pb-2">
        <CardTitle className="text-md font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col justify-center items-center">
        <span className="text-4xl font-bold">{value}</span>
        {caption && (
          <span className="text-sm text-secondary-foreground">{caption}</span>
        )}
      </CardContent>
    </Card>
  );
};

export default OverviewCard;
