import { ArgsType, Field, GraphQLISODateTime } from '@nestjs/graphql';

@ArgsType()
export class GetHabitTrackingArgs {
  @Field(() => GraphQLISODateTime, { nullable: true })
  date?: Date;
}
