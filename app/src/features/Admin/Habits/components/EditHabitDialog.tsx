import { useState } from "react";

import { ApolloError } from "@apollo/client";
import { useForm } from "react-hook-form";

import CurrentFreqField from "./FormInputs/CurrentFreqField";
import DifficultyField from "./FormInputs/DifficultyField";
import DueDateField from "./FormInputs/DueDateField";
import IsPausedField from "./FormInputs/IsPausedField";
import NameField from "./FormInputs/NameField";
import PointsField from "./FormInputs/PointsField";
import StartDateField from "./FormInputs/StartDateField";
import TargetFreqField from "./FormInputs/TargetFreqField";
import { Icon } from "@/components/icon";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import useUpdateHabit from "@/hooks-api/useUpdateHabit";
import { Habit } from "@/lib/graphql/codegen/graphql";

type FormValues = {
  name: string;
  difficulty: string;
  start_date: Date;
  target_frequency: number;
  current_frequency: number;
  points: number;
  due_date?: Date;
  is_paused: boolean;
};

interface EditHabitDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  habit: Habit;
}

const EditHabitDialog: React.FC<EditHabitDialogProps> = ({
  habit,
  open,
  setOpen,
}) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { updateHabit } = useUpdateHabit();
  const {
    control,
    handleSubmit,
    reset,
    formState: { isValid, isDirty },
  } = useForm<FormValues>({
    mode: "all",
    defaultValues: {
      start_date: new Date(habit?.start_date) ?? new Date(),
      is_paused: habit?.is_paused ?? false,
      name: habit.name,
      difficulty: habit.difficulty,
      target_frequency: habit?.target_frequency ?? 0,
      current_frequency: habit?.current_frequency ?? 0,
      points: habit?.points ?? 0,
      due_date: habit?.due_date ? new Date(habit?.due_date) : new Date(),
    },
  });

  const onSubmit = async (data: FormValues) => {
    try {
      setLoading(true);
      await updateHabit({
        ...data,
        id: habit.id,
        target_frequency: Number(data.target_frequency),
        current_frequency: Number(data.current_frequency),
        points: Number(data?.points) ?? 0,
      });
      reset();
      setOpen(false);
      setLoading(false);
      toast({
        title: `${data.name} updated`,
        variant: "success",
      });
    } catch (error) {
      setLoading(false);
      if (error instanceof ApolloError) {
        setError(error.message);
      }
    }
  };

  return (
    <Dialog onOpenChange={setOpen} open={open}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit {habit.name}</DialogTitle>
          <DialogDescription>
            Habits are a powerful way to track your progress over time.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-2 py-4">
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          <NameField control={control} />
          <DifficultyField control={control} />
          <StartDateField control={control} />

          <fieldset className="flex flex-col gap-2">
            <legend className="text-sm font-medium text-gray-900 mb-2">
              Frequency
            </legend>
            <div className="flex flex-row gap-2">
              <CurrentFreqField control={control} />
              <TargetFreqField control={control} />
            </div>
          </fieldset>

          <Collapsible>
            <div className="flex items-center justify-between space-x-4">
              <h4 className="text-sm font-semibold">Advance Options</h4>

              <CollapsibleTrigger>
                <Icon name="chevrons-up-down" className="h-5 w-5" />
                <span className="sr-only">Toggle</span>
              </CollapsibleTrigger>
            </div>

            <CollapsibleContent>
              <div className="flex flex-col gap-2 py-4">
                <PointsField control={control} />
                <DueDateField control={control} />
                <IsPausedField control={control} />
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
        <DialogFooter className="flex flex-row sm:justify-between">
          <Button type="button" variant="secondary">
            Cancel
          </Button>
          <Button
            type="button"
            isLoading={loading}
            onClick={handleSubmit(onSubmit)}
            disabled={!isValid || !isDirty}
          >
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditHabitDialog;
