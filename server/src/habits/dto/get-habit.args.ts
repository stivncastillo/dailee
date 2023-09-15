import { ArgsType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@ArgsType()
export class GetHabitArgs {
  @Field()
  @IsNotEmpty()
  id: string;
}
