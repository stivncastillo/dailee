import { ObjectType, Field, Float, Int } from "@nestjs/graphql";

@ObjectType()
export class WeeklyPoints {
  @Field(() => Int)
  points: number;

  @Field(() => Float)
  pointsAverage: number;
}
