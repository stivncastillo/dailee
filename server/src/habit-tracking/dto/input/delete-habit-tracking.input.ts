import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class DeleteHabitTrackingInput {
  @Field()
  @IsNotEmpty()
  id: number;
}
