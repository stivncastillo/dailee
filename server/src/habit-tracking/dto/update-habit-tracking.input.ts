import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

import { CreateHabitTrackingInput } from './create-habit-tracking.input';

@InputType()
export class UpdateHabitTrackingInput extends PartialType(
  CreateHabitTrackingInput,
) {
  @Field(() => Int)
  id: number;
}
