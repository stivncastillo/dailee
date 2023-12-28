import React from "react";

import { useHabitLogsContext } from "../HabitLogsContext";
import Tooltip from "@/components/feedback/Tooltip";
import { Icon } from "@/components/icon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { DIFFICULTIES } from "@/lib/config";
import { getDaysRemaining } from "@/lib/date";
import { Habit } from "@/lib/graphql/codegen/graphql";

interface HabitCardProps {
  habit: Habit;
}

const HabitCard: React.FC<HabitCardProps> = ({
  habit: {
    id,
    name,
    points,
    difficulty,
    current_frequency,
    target_frequency,
    is_paused,
    due_date,
  },
}) => {
  const daysRemaining = getDaysRemaining(new Date(due_date));
  const { onAction } = useHabitLogsContext();

  return (
    <div className="relative flex flex-col gap-4 border">
      <div className="flex flex-row justify-between">
        {is_paused && (
          <div className="absolute left-0 top-0 right-0 bottom-0 bg-gray-100/70 flex flex-col justify-center items-center text-gray-500">
            <span>Paused</span>
          </div>
        )}
        <div className="p-4 flex flex-col gap-4 flex-1">
          <div className="flex flex-row justify-between items-center">
            <h4 className="text-lg">{name}</h4>
            <div className="flex flex-row gap-1">
              <span className="text-xs text-gray-500">{points} points</span>
              {due_date && (
                <Tooltip text={`Will expire in ${daysRemaining} days`}>
                  <Icon name="calendar" className="text-gray-500 h-4 w-4" />
                </Tooltip>
              )}
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row h-5 gap-2 text-gray-500">
              <span className="text-sm">3 this week</span>
              <Separator orientation="vertical" />
              <span className="text-sm">current: {current_frequency}</span>
              <Separator orientation="vertical" />
              <span className="text-sm">target: {target_frequency}</span>
            </div>
            <Badge size="sm" variant={DIFFICULTIES[difficulty].color}>
              {`${DIFFICULTIES[difficulty].name}`}
            </Badge>
          </div>
        </div>

        <div className="flex flex-col bg-red-300 shrink-0">
          <Button
            size="icon"
            className="grow aspect-square rounded-none"
            onClick={() => onAction?.(id, "delete")}
          >
            <Icon name="minus" />
          </Button>
          <Button
            size="icon"
            className="grow aspect-square rounded-none"
            onClick={() => onAction?.(id, "create")}
          >
            <Icon name="plus" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HabitCard;
