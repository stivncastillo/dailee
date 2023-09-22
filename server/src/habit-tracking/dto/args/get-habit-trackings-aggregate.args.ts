import { ArgsType, Field, GraphQLISODateTime } from '@nestjs/graphql';

@ArgsType()
export class GetHabitTrackingsAggregateArgs {
  @Field(() => GraphQLISODateTime, { nullable: true })
  dateStart?: Date;

  @Field(() => GraphQLISODateTime, { nullable: true })
  dateEnd?: Date;
}
