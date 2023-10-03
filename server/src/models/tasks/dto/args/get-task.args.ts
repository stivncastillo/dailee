import { ArgsType, Field } from "@nestjs/graphql";

import { TaskWhereUniqueInput } from "../where/task-where.args";

@ArgsType()
export class GetTaskArgs {
  @Field({ nullable: true })
  where: TaskWhereUniqueInput;
}
