/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "mutation SignIn($signInInput: SigninInput!) {\n  signin(signinInput: $signInInput) {\n    accessToken\n    refreshToken\n    user {\n      ...UserFields\n    }\n  }\n}\n\nmutation RefreshToken {\n  newTokens {\n    accessToken\n    refreshToken\n    user {\n      ...UserFields\n    }\n  }\n}\n\nmutation CreateHabit($createHabitInput: CreateHabitInput!) {\n  createHabit(createHabitInput: $createHabitInput) {\n    ...HabitFields\n  }\n}\n\nmutation DeleteHabits($deleteHabitsInput: DeleteManyInput!) {\n  deleteHabits(deleteHabitsInput: $deleteHabitsInput)\n}\n\nmutation UpdateHabit($updateHabitInput: UpdateHabitInput!) {\n  updateHabit(updateHabitInput: $updateHabitInput) {\n    ...HabitFields\n  }\n}\n\nmutation CreateHabitLog($createHabitLogInput: CreateHabitLogInput!) {\n  createHabitLog(createHabitLogInput: $createHabitLogInput) {\n    ...HabitLogFields\n  }\n}\n\nmutation DeleteHabitLog($deleteHabitLogInput: DeleteHabitLogInput!) {\n  deleteHabitLog(deleteHabitLogInput: $deleteHabitLogInput) {\n    id\n  }\n}": types.SignInDocument,
    "fragment UserFields on User {\n  id\n  name\n  email\n}\n\nfragment HabitFields on Habit {\n  id\n  name\n  difficulty\n  start_date\n  due_date\n  target_frequency\n  current_frequency\n  is_paused\n  points\n  created_at\n  updated_at\n  user_id {\n    ...UserFields\n  }\n}\n\nfragment HabitLogFields on HabitLog {\n  id\n  habit_id {\n    id\n  }\n  is_completed\n  is_target_completed\n  points\n  date\n}\n\nfragment TaskFields on Task {\n  id\n  title\n  status\n  completed_date\n  difficulty\n  created_at\n  updated_at\n}\n\nquery getHabits($where: HabitWhereInput, $orderBy: [HabitOrderByWithRelationInput!]) {\n  habits(where: $where, orderBy: $orderBy) {\n    ...HabitFields\n  }\n}\n\nquery getTasks($where: TaskWhereInput, $orderBy: [TaskOrderByWithRelationInput!]) {\n  tasks(where: $where, orderBy: $orderBy) {\n    ...TaskFields\n  }\n}": types.UserFieldsFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation SignIn($signInInput: SigninInput!) {\n  signin(signinInput: $signInInput) {\n    accessToken\n    refreshToken\n    user {\n      ...UserFields\n    }\n  }\n}\n\nmutation RefreshToken {\n  newTokens {\n    accessToken\n    refreshToken\n    user {\n      ...UserFields\n    }\n  }\n}\n\nmutation CreateHabit($createHabitInput: CreateHabitInput!) {\n  createHabit(createHabitInput: $createHabitInput) {\n    ...HabitFields\n  }\n}\n\nmutation DeleteHabits($deleteHabitsInput: DeleteManyInput!) {\n  deleteHabits(deleteHabitsInput: $deleteHabitsInput)\n}\n\nmutation UpdateHabit($updateHabitInput: UpdateHabitInput!) {\n  updateHabit(updateHabitInput: $updateHabitInput) {\n    ...HabitFields\n  }\n}\n\nmutation CreateHabitLog($createHabitLogInput: CreateHabitLogInput!) {\n  createHabitLog(createHabitLogInput: $createHabitLogInput) {\n    ...HabitLogFields\n  }\n}\n\nmutation DeleteHabitLog($deleteHabitLogInput: DeleteHabitLogInput!) {\n  deleteHabitLog(deleteHabitLogInput: $deleteHabitLogInput) {\n    id\n  }\n}"): (typeof documents)["mutation SignIn($signInInput: SigninInput!) {\n  signin(signinInput: $signInInput) {\n    accessToken\n    refreshToken\n    user {\n      ...UserFields\n    }\n  }\n}\n\nmutation RefreshToken {\n  newTokens {\n    accessToken\n    refreshToken\n    user {\n      ...UserFields\n    }\n  }\n}\n\nmutation CreateHabit($createHabitInput: CreateHabitInput!) {\n  createHabit(createHabitInput: $createHabitInput) {\n    ...HabitFields\n  }\n}\n\nmutation DeleteHabits($deleteHabitsInput: DeleteManyInput!) {\n  deleteHabits(deleteHabitsInput: $deleteHabitsInput)\n}\n\nmutation UpdateHabit($updateHabitInput: UpdateHabitInput!) {\n  updateHabit(updateHabitInput: $updateHabitInput) {\n    ...HabitFields\n  }\n}\n\nmutation CreateHabitLog($createHabitLogInput: CreateHabitLogInput!) {\n  createHabitLog(createHabitLogInput: $createHabitLogInput) {\n    ...HabitLogFields\n  }\n}\n\nmutation DeleteHabitLog($deleteHabitLogInput: DeleteHabitLogInput!) {\n  deleteHabitLog(deleteHabitLogInput: $deleteHabitLogInput) {\n    id\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment UserFields on User {\n  id\n  name\n  email\n}\n\nfragment HabitFields on Habit {\n  id\n  name\n  difficulty\n  start_date\n  due_date\n  target_frequency\n  current_frequency\n  is_paused\n  points\n  created_at\n  updated_at\n  user_id {\n    ...UserFields\n  }\n}\n\nfragment HabitLogFields on HabitLog {\n  id\n  habit_id {\n    id\n  }\n  is_completed\n  is_target_completed\n  points\n  date\n}\n\nfragment TaskFields on Task {\n  id\n  title\n  status\n  completed_date\n  difficulty\n  created_at\n  updated_at\n}\n\nquery getHabits($where: HabitWhereInput, $orderBy: [HabitOrderByWithRelationInput!]) {\n  habits(where: $where, orderBy: $orderBy) {\n    ...HabitFields\n  }\n}\n\nquery getTasks($where: TaskWhereInput, $orderBy: [TaskOrderByWithRelationInput!]) {\n  tasks(where: $where, orderBy: $orderBy) {\n    ...TaskFields\n  }\n}"): (typeof documents)["fragment UserFields on User {\n  id\n  name\n  email\n}\n\nfragment HabitFields on Habit {\n  id\n  name\n  difficulty\n  start_date\n  due_date\n  target_frequency\n  current_frequency\n  is_paused\n  points\n  created_at\n  updated_at\n  user_id {\n    ...UserFields\n  }\n}\n\nfragment HabitLogFields on HabitLog {\n  id\n  habit_id {\n    id\n  }\n  is_completed\n  is_target_completed\n  points\n  date\n}\n\nfragment TaskFields on Task {\n  id\n  title\n  status\n  completed_date\n  difficulty\n  created_at\n  updated_at\n}\n\nquery getHabits($where: HabitWhereInput, $orderBy: [HabitOrderByWithRelationInput!]) {\n  habits(where: $where, orderBy: $orderBy) {\n    ...HabitFields\n  }\n}\n\nquery getTasks($where: TaskWhereInput, $orderBy: [TaskOrderByWithRelationInput!]) {\n  tasks(where: $where, orderBy: $orderBy) {\n    ...TaskFields\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;