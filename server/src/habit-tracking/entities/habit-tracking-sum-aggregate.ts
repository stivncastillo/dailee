import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class HabitTrackingSumAggregate {
  @Field(() => Int)
  points: number;
}
