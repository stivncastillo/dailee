import { join } from "path";

import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { GraphQLError } from "graphql";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PrismaModule } from "./common/database/prisma/prisma.module";
import configuration from "./config/configuration";
import { validate } from "./config/validation";
import { HabitTrackingModule } from "./models/habit-tracking/habit-tracking.module";
import { HabitsModule } from "./models/habits/habits.module";
import { TasksModule } from "./models/tasks/tasks.module";
import { UserModule } from "./models/user/user.module";
import { DashboardModule } from './models/dashboard/dashboard.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [configuration],
      validate,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), "src/graphql/schema.gql"),
      sortSchema: false,
      formatError: (error: GraphQLError) => {
        const graphQLFormattedError = {
          path: error.path,
          //@ts-ignore
          message: error.extensions?.originalError?.message || error.message,
          code: error.extensions?.code || "SERVER_ERROR",
          name: error.extensions?.name || error.name,
          statusCode:
            //@ts-ignore
            error?.extensions?.originalError?.statusCode ||
            //@ts-ignore
            error?.statusCode ||
            500,
        };
        return graphQLFormattedError;
      },
    }),
    HabitsModule,
    HabitTrackingModule,
    PrismaModule,
    UserModule,
    TasksModule,
    DashboardModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
