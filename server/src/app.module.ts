import { join } from "path";

import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { APP_GUARD } from "@nestjs/core";
import { GraphQLModule } from "@nestjs/graphql";
import { GraphQLError } from "graphql";

import { PrismaModule } from "./common/database/prisma/prisma.module";
import configuration from "./config/configuration";
import { validate } from "./config/validation";
import { AuthModule } from "./modules/auth/auth.module";
import { AccessTokenGuard } from "./modules/auth/guards/accessToken.guard";
import { DashboardModule } from "./modules/dashboard/dashboard.module";
import { HabitsModule } from "./modules/habits/habits.module";
import { TasksModule } from "./modules/tasks/tasks.module";
import { UserModule } from "./modules/user/user.module";

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
    PrismaModule,
    UserModule,
    TasksModule,
    DashboardModule,
    AuthModule,
  ],
  controllers: [],
  providers: [{ provide: APP_GUARD, useClass: AccessTokenGuard }],
})
export class AppModule {}
