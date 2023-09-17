"use client";

import { useState } from "react";
import { Rating as ReactRating } from "@smastrom/react-rating";

const StarDrawing = (
  <path
    d="
    M 25, 50
    a 25,25 0 1,1 50,0
    a 25,25 0 1,1 -50,0
  "
  />
); // Source: https://www.svgrepo.com/svg/118939/star

const customStyles = {
  itemShapes: StarDrawing,
  activeFillColor: ["#F31260", "#f97316", "#facc15", "#84cc16", "#22c55e"],
  inactiveFillColor: "#f1f5f9",
};

export function Rating() {
  const [rating, setRating] = useState(0);

  return (
    <ReactRating
      style={{ maxWidth: 300 }}
      value={rating}
      onChange={setRating}
      itemStyles={customStyles}
    />
  );
}
