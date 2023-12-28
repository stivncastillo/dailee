import HabitCard from "./components/HabitCard";
import { useHabitLogsContext } from "./HabitLogsContext";
import Spinner from "@/components/feedback/Spinner";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

const HabitLogs = () => {
  const { habits, loadingHabits } = useHabitLogsContext();

  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Habits</CardTitle>
        <CardDescription>You have 5 habits uncompleted today.</CardDescription>
      </CardHeader>
      <CardContent>
        {loadingHabits && (
          <div className="flex justify-center">
            <Spinner size="lg" />
          </div>
        )}
        <div className="flex flex-col gap-4">
          {habits.map((habit) => (
            <HabitCard key={habit.id} habit={habit} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default HabitLogs;
