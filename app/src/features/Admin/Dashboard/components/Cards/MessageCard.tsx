import React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MessageCardProps {
  title: string;
  message: string;
  className?: string;
}

const MessageCard: React.FC<MessageCardProps> = ({
  title,
  message,
  className,
}) => {
  return (
    <Card
      className={cn(
        "col-span-2 flex flex-col justify-center items-center p-0",
        className,
      )}
    >
      <CardContent className="py-0 text-center flex flex-col gap-2">
        <h3 className="text-md font-medium">{title}</h3>
        <p className="text-sm">{message}</p>
      </CardContent>
    </Card>
  );
};

export default MessageCard;
