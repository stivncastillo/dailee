import { RatingChange, Rating as ReactRating } from "@smastrom/react-rating";

const DotDrawing = (
  <path
    d="
      M 25, 50
      a 25,25 0 1,1 50,0
      a 25,25 0 1,1 -50,0
    "
  />
);

const customStyles = {
  itemShapes: DotDrawing,
  activeFillColor: ["#F31260", "#f97316", "#facc15", "#84cc16", "#22c55e"],
  inactiveFillColor: "#f1f5f9",
};

type Props = {
  onChange?: RatingChange;
  value: number;
};

export function Rating({ onChange, value }: Props) {
  return (
    <ReactRating
      style={{ width: 90 }}
      value={value}
      onChange={onChange}
      itemStyles={customStyles}
    />
  );
}
