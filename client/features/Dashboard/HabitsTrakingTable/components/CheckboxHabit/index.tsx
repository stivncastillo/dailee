import React, { useState } from "react";

import { Checkbox } from "@nextui-org/react";

import RatingPopover from "./RatingPopover";
import { HeartFilledIcon } from "@/components/icons";

interface Props {
  onSave: (value: number) => void;
  onDelete: () => Promise<void>;
  isChecked: boolean;
  value: number;
}

const getColor = (value: number) => {
  if (value === 0 || value === 5 || value === 4) return "success";
  if (value === 3) return "warning";
  if (value <= 2) return "danger";
};

const CheckboxHabit = ({ onSave, onDelete, isChecked, value }: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const [rating, setRating] = useState<number>(value ?? 5);
  const [isEdited, setIsEdited] = useState(false);
  const [delayedAction, setDelayedAction] = useState<
    number | NodeJS.Timeout | null
  >(null);

  const handleMouseEnter = () => {
    const action = () => {
      if (value > 0) setOpen(true);
    };
    const timeoutId = setTimeout(action, 500);
    setDelayedAction(timeoutId);
  };

  const handleMouseLeave = () => {
    if (delayedAction) {
      clearTimeout(delayedAction);
      setDelayedAction(null);
      // setOpen(false);
    }
  };

  const handleSave = () => {
    if (isEdited) {
      onSave(rating);
      setIsEdited(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <Checkbox
        isSelected={isChecked}
        // value={isChecked ? "true" : "false"}
        classNames={{ wrapper: "mr-0" }}
        color={getColor(value)}
        icon={<HeartFilledIcon fill="#ffffff" />}
        onChange={async (value) => {
          if (!value.target.checked) {
            await onDelete();
            setOpen(false);
            return;
          }
          setOpen(value.target.checked);
        }}
        onMouseEnter={() => {
          if (value > 0) handleMouseEnter();
        }}
        onMouseLeave={() => {
          if (value > 0) handleMouseLeave();
        }}
      ></Checkbox>

      <RatingPopover
        onSave={handleSave}
        open={open}
        setOpen={setOpen}
        rating={rating}
        setRating={(value) => {
          setIsEdited(true);
          setRating(value);
        }}
      />
    </div>
  );
};

export default CheckboxHabit;
