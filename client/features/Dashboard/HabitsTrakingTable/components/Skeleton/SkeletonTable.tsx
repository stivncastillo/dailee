import React from "react";

import { Card, Skeleton } from "@nextui-org/react";

const SkeletonTable = () => {
  return (
    <div className="flex flex-col">
      <Card className="space-y-5 p-4" radius="lg">
        <Skeleton className="rounded-md">
          <div className="h-10 rounded-lg bg-red-300 block"></div>
        </Skeleton>

        <div className="flex flex-row justify-between">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <Skeleton className="rounded-md" key={item}>
              <div className="h-4 w-16 rounded-lg bg-default-300"></div>
            </Skeleton>
          ))}
        </div>
        <div className="flex flex-row justify-between">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <Skeleton className="rounded-md" key={item}>
              <div className="h-4 w-16 rounded-lg bg-default-300"></div>
            </Skeleton>
          ))}
        </div>
        <div className="flex flex-row justify-between">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <Skeleton className="rounded-md" key={item}>
              <div className="h-4 w-16 rounded-lg bg-default-300"></div>
            </Skeleton>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default SkeletonTable;
