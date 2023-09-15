import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class HabitTracking {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
