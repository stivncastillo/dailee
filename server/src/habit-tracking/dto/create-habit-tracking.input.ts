import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateHabitTrackingInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
