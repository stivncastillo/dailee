import React from "react";

import MessageCard from "./components/Cards/MessageCard";
import OverviewCard from "./components/Cards/OverviewCard";
import HabitLogContainer from "./components/HabitLogs";
import WeeklyBarChart from "@/components/data-display/WeeklyBarChart";
import { Icon } from "@/components/icon";
import DefaultLayout from "@/components/layout/DefaultLayout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const DashboardPage: React.FC = () => {
  return (
    <DefaultLayout>
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <div className="flex items-center space-x-2">
          <span>Fri 8th Dec 2023</span>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-8">
        <OverviewCard
          className="col-span-2"
          value={40}
          title="This Week"
          caption="3 Average points"
          rightContent={() => (
            <WeeklyBarChart
              data={[
                { value: 10, tooltip: "Mon [10%]" },
                { value: 60, tooltip: "Tue [60%]" },
                { value: 40, tooltip: "Wed [40%]" },
                { value: 80, tooltip: "Thu [40%]" },
                { value: 0, tooltip: "Fri [40%]" },
              ]}
            />
          )}
        />
        <OverviewCard
          className="col-span-2"
          value={12}
          title="Today"
          footerContent={() => (
            <Progress size="sm" className="w-full" value={90} max={100} />
          )}
          rightContent={() => <Icon name="alert-triangle" />}
        />
        <MessageCard
          className="col-span-2 col-start-7"
          title="Steady Progress"
          message="Every little progress counts. Keep pushing!"
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-8">
        <HabitLogContainer />

        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Tasks</CardTitle>
            <CardDescription>You made 265 sales this month.</CardDescription>
          </CardHeader>
          <CardContent>My Fucking tasks</CardContent>
        </Card>
      </div>
    </DefaultLayout>
  );
};

export default DashboardPage;
