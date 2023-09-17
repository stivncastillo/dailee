"use client";
import HabitsTable from "@/components/HabitsTable";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { title } from "@/components/primitives";
import { Divider } from "@nextui-org/react";

export default function Home() {
  return (
    <section className="flex flex-col gap-4 pt-4">
      <div className="grid grid-cols-[1fr_400px] gap-4">
        <HabitsTable />

        <div className="flex flex-col gap-4">
          <Card shadow="sm" className=" flex-shrink-0 flex-grow">
            <CardHeader>
              <span>Today</span>
            </CardHeader>
            <Divider />
            <CardBody className="flex flex-col justify-center items-center gap-4">
              <h2 className={title({ color: "success", size: "lg" })}>22</h2>
              <span className="">Point today, well done!</span>
            </CardBody>
          </Card>
          <Card shadow="sm" className=" flex-shrink-0 flex-grow">
            <CardHeader>
              <span>This Week</span>
            </CardHeader>
            <Divider />
            <CardBody className="flex flex-col justify-center items-center gap-4">
              <h2 className={title({ color: "success", size: "lg" })}>45</h2>
              <span className="">Point today, well done!</span>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
}
