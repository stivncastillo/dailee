import { ObjectType, Field, Float } from "@nestjs/graphql";

@ObjectType()
export class HabitTrackingAvgAggregate {
  @Field(() => Float, { nullable: true })
  points: number;
}
