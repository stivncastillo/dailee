import { useState } from "react";

import { ApolloError } from "@apollo/client";
import { useForm } from "react-hook-form";

import ControlledSelect from "@/components/form/ContolledSelect";
import ControlledDatePicker from "@/components/form/ControlledDatePicker";
import ControlledInput from "@/components/form/ControlledInput";
import ControlledSwitch from "@/components/form/ControlledSwitch";
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
import useCreateHabit from "@/hooks-api/useCreateHabit";
import { DIFFICULTY_OPTIONS } from "@/lib/config";
import { compareDates } from "@/lib/date";

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
        points: Number(data?.points) ?? 0,
      });
      reset();
      setOpen(false);
      setLoading(false);
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
          <ControlledInput
            control={control}
            placeholder="Name"
            name="name"
            type="text"
            rules={{
              required: "Name is required",
            }}
          />

          <ControlledSelect
            name="difficulty"
            control={control}
            options={DIFFICULTY_OPTIONS}
            placeholder="Difficulty"
            rules={{
              required: "Difficulty is required",
            }}
          />

          <ControlledDatePicker
            name="start_date"
            placeholder="Start Date"
            control={control}
            rules={{
              required: "Start Date is required",
              validate: (value: Date) => {
                if (compareDates(value, new Date()) < 0) {
                  return "Start Date cannot be in the past";
                }
                return true;
              },
            }}
          />

          <fieldset className="flex flex-col gap-2">
            <legend className="text-sm font-medium text-gray-900 mb-2">
              Frequency
            </legend>
            <div className="flex flex-row gap-2">
              <ControlledInput
                control={control}
                placeholder="Current Frequency"
                name="current_frequency"
                type="number"
                rules={{
                  required: "Current Frequency is required",
                  min: {
                    value: 0,
                    message: "This cannot be less than 0",
                  },
                }}
              />
              <ControlledInput
                control={control}
                placeholder="Target Frequency"
                name="target_frequency"
                type="number"
                rules={{
                  required: "Target Frequency is required",
                  min: {
                    value: 0,
                    message: "This cannot be less than 0",
                  },
                }}
              />
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
                <ControlledInput
                  control={control}
                  placeholder="Points"
                  name="points"
                  type="number"
                  rules={{
                    max: {
                      value: 10,
                      message: "Points cannot be greater than 10",
                    },
                    min: {
                      value: 0,
                      message: "Points cannot be less than 0",
                    },
                  }}
                />
                <ControlledDatePicker
                  name="due_date"
                  placeholder="Due Date"
                  control={control}
                />

                <ControlledSwitch
                  control={control}
                  name="is_paused"
                  label="Is Paused"
                  id="is_paused"
                />
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
