import { InputType, Field } from '@nestjs/graphql';
import { MaxLength } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field(() => String, { description: 'Name of habit' })
  @MaxLength(120)
  name: string;
}
