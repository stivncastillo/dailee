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
    "mutation CreateHabit($createHabitInput: CreateHabitInput!) {\n  createHabit(createHabitInput: $createHabitInput) {\n    ...HabitFields\n  }\n}\n\nmutation UpdateHabit($updateHabitInput: UpdateHabitInput!) {\n  updateHabit(updateHabitInput: $updateHabitInput) {\n    ...HabitFields\n  }\n}\n\nmutation DeleteHabit($deleteHabitInput: DeleteHabitInput!) {\n  deleteHabit(deleteHabitInput: $deleteHabitInput) {\n    id\n  }\n}\n\nmutation DeleteHabits($deleteHabitsInput: DeleteHabitsInput!) {\n  deleteHabits(deleteHabitsInput: $deleteHabitsInput)\n}": types.CreateHabitDocument,
    "fragment HabitFields on Habit {\n  id\n  name\n  isPaused\n  dueDate\n  createdAt\n  updatedAt\n}\n\nquery getHabits {\n  habits {\n    ...HabitFields\n  }\n}": types.HabitFieldsFragmentDoc,
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
export function graphql(source: "mutation CreateHabit($createHabitInput: CreateHabitInput!) {\n  createHabit(createHabitInput: $createHabitInput) {\n    ...HabitFields\n  }\n}\n\nmutation UpdateHabit($updateHabitInput: UpdateHabitInput!) {\n  updateHabit(updateHabitInput: $updateHabitInput) {\n    ...HabitFields\n  }\n}\n\nmutation DeleteHabit($deleteHabitInput: DeleteHabitInput!) {\n  deleteHabit(deleteHabitInput: $deleteHabitInput) {\n    id\n  }\n}\n\nmutation DeleteHabits($deleteHabitsInput: DeleteHabitsInput!) {\n  deleteHabits(deleteHabitsInput: $deleteHabitsInput)\n}"): (typeof documents)["mutation CreateHabit($createHabitInput: CreateHabitInput!) {\n  createHabit(createHabitInput: $createHabitInput) {\n    ...HabitFields\n  }\n}\n\nmutation UpdateHabit($updateHabitInput: UpdateHabitInput!) {\n  updateHabit(updateHabitInput: $updateHabitInput) {\n    ...HabitFields\n  }\n}\n\nmutation DeleteHabit($deleteHabitInput: DeleteHabitInput!) {\n  deleteHabit(deleteHabitInput: $deleteHabitInput) {\n    id\n  }\n}\n\nmutation DeleteHabits($deleteHabitsInput: DeleteHabitsInput!) {\n  deleteHabits(deleteHabitsInput: $deleteHabitsInput)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment HabitFields on Habit {\n  id\n  name\n  isPaused\n  dueDate\n  createdAt\n  updatedAt\n}\n\nquery getHabits {\n  habits {\n    ...HabitFields\n  }\n}"): (typeof documents)["fragment HabitFields on Habit {\n  id\n  name\n  isPaused\n  dueDate\n  createdAt\n  updatedAt\n}\n\nquery getHabits {\n  habits {\n    ...HabitFields\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;