import React from "react";

import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { Divider } from "@nextui-org/react";

type Props = {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  rightHeaderContent?: React.ReactNode;
};

const DashboardCard = ({
  children,
  title,
  subtitle,
  rightHeaderContent,
}: Props) => {
  return (
    <Card className="w-full" shadow="sm" radius="sm">
      {title && (
        <CardHeader className="flex justify-between">
          <div className="flex flex-col">
            <h2 className="text-lg font-bold">{title}</h2>
            {subtitle && (
              <p className="text-small text-default-500">{subtitle}</p>
            )}
          </div>

          {rightHeaderContent}
        </CardHeader>
      )}
      <Divider />
      <CardBody>{children}</CardBody>
    </Card>
  );
};

export default DashboardCard;
