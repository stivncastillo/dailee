import { HabitsProvider } from "./HabitsContext";
import HabitsTable from "./HabitsTable";
import DefaultLayout from "@/components/layout/DefaultLayout";

const HabitsPage = () => {
  return (
    <DefaultLayout>
      <HabitsProvider>
        <h1 className="text-3xl font-bold">Habits</h1>
        <HabitsTable />
      </HabitsProvider>
    </DefaultLayout>
  );
};

export default HabitsPage;
