import { ArgsType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@ArgsType()
export class GetHabitTrackingArgs {
  @Field()
  @IsNotEmpty()
  id: number;
}
