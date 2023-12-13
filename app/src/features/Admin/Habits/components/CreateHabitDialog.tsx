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
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import useCreateHabit from "@/hooks-api/useCreateHabit";
import { DIFFICULTIES } from "@/lib/config";

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

const CreateHabitDialog = () => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { createHabit } = useCreateHabit();
  const {
    control,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm<FormValues>({
    mode: "all",
    defaultValues: {
      start_date: new Date(),
      is_paused: false,
    },
  });

  const onSubmit = async (data: FormValues) => {
    try {
      setLoading(true);
      await createHabit({
        ...data,
        target_frequency: Number(data.target_frequency),
        current_frequency: Number(data.current_frequency),
        points: data?.points
          ? Number(data?.points)
          : DIFFICULTIES[data.difficulty].points,
      });
      reset();
      setOpen(false);
      setLoading(false);
      toast({
        title: `${data.name} created`,
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
      <DialogTrigger asChild>
        <Button>
          <Icon name="plus" className="mr-2 h-5 w-5" />
          Create
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create new habit</DialogTitle>
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
            disabled={!isValid}
          >
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateHabitDialog;
