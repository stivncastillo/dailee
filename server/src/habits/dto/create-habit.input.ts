import { InputType, Field, GraphQLISODateTime } from '@nestjs/graphql';
import { MaxLength } from 'class-validator';

@InputType()
export class CreateHabitInput {
  @Field(() => String, { description: 'Name of habit' })
  @MaxLength(40)
  name: string;

  @Field(() => GraphQLISODateTime, { nullable: true })
  dueDate?: Date;

  @Field(() => Boolean, {
    description: 'If habit is paused it doesnt list as active habit',
  })
  isPaused: boolean;
}
