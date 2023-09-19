import { Rating } from "@/components/Rating";
import React from "react";

type Props = {
  value: number;
  onChange: (value: number) => void;
};

const Score = ({ value, onChange }: Props) => {
  return <Rating value={value} onChange={onChange} />;
};

export default Score;
