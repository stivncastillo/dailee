import { CreateHabitTrackingInput } from './create-habit-tracking.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateHabitTrackingInput extends PartialType(CreateHabitTrackingInput) {
  @Field(() => Int)
  id: number;
}
