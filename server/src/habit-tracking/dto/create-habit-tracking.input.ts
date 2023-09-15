import { InputType, Int, Field, GraphQLISODateTime } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateHabitTrackingInput {
  @Field(() => GraphQLISODateTime, { nullable: true })
  date: Date;

  @Field(() => Int)
  points: number;

  @Field(() => String)
  @IsNotEmpty()
  habitId: string;

  @Field(() => String)
  @IsNotEmpty()
  userId: string;
}
