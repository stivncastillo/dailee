import React from "react";

import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";

import Score from "../Score";

type Props = {
  open: boolean;
  setOpen: (value: boolean) => void;
  rating: number;
  setRating: (value: number) => void;
  onSave: () => void;
};

const RatingPopover = ({ open, setOpen, rating, setRating, onSave }: Props) => {
  const handleClose = () => {
    onSave();
    setOpen(false);
  };

  return (
    <Popover
      isOpen={open}
      onClose={handleClose}
      placement="bottom"
      offset={6}
      showArrow
      radius="sm"
      shouldCloseOnBlur
    >
      <PopoverTrigger>
        <span></span>
      </PopoverTrigger>
      <PopoverContent>
        <div className="flex flex-col space-y-2 justify-center items-center">
          <div className="text-tiny">Rate this habit</div>
          <Score
            value={rating}
            onChange={(value) => {
              setRating(value);
            }}
          />
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default RatingPopover;
