import React from "react";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface OverviewCardProps {
  title: string;
  value: string | number | React.ReactNode;
  caption?: string | number | React.ReactNode;
  className?: string;
  rightContent?: () => JSX.Element | null;
  footerContent?: () => JSX.Element | null;
}

const OverviewCard: React.FC<OverviewCardProps> = ({
  title,
  value,
  caption,
  className,
  rightContent: RightContent,
  footerContent: FooterContent,
}) => {
  return (
    <Card className={cn(className)}>
      <CardContent className="flex flex-row p-4 space-y-2 justify-between gap-4">
        <div className="flex-col items-start">
          <span className="text-base">{title}</span>
          <h2 className="text-4xl font-bold">{value}</h2>
          {caption && <span className="text-sm text-gray-600">{caption}</span>}
        </div>
        <div className="flex-1 flex justify-end">
          {RightContent && <RightContent />}
        </div>
      </CardContent>
      {FooterContent && (
        <CardFooter className="p-4 pt-0">
          <FooterContent />
        </CardFooter>
      )}
    </Card>
  );
};

export default OverviewCard;
