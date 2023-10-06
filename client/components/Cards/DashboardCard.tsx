import React from "react";

import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/react";

type Props = {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
};

const DashboardCard = ({ children, title, subtitle }: Props) => {
  return (
    <Card className="w-full" shadow="sm">
      {title && (
        <CardHeader className="flex gap-3">
          <div className="flex flex-col">
            <h2 className="text-lg font-bold">{title}</h2>
            {subtitle && (
              <p className="text-small text-default-500">{subtitle}</p>
            )}
          </div>
        </CardHeader>
      )}
      <Divider />
      <CardBody>{children}</CardBody>
    </Card>
  );
};

export default DashboardCard;
