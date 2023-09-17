import { Field, InputType } from '@nestjs/graphql';
import { IsArray } from 'class-validator';

@InputType()
export class DeleteHabitsInput {
  @Field(() => [String])
  @IsArray()
  ids: Array<string>;
}
