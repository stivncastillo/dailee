import { HabitsProvider } from "./HabitsContext";
import HabitsTable from "./HabitsTable";
import DefaultLayout from "@/components/layout/DefaultLayout";

const HabitsPage = () => {
  return (
    <DefaultLayout>
      <HabitsProvider>
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Habits</h2>
        </div>
        <HabitsTable />
      </HabitsProvider>
    </DefaultLayout>
  );
};

export default HabitsPage;
