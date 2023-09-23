import React from "react";

import { Rating } from "@/components/Rating";

type Props = {
  value: number;
  onChange: (value: number) => void;
};

const Score = ({ value, onChange }: Props) => {
  return (
    <div className="flex flex-row items-center justify-center">
      <Rating value={value} onChange={onChange} />
    </div>
  );
};

export default Score;
