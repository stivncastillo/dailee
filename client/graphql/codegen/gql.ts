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
    "mutation CreateHabit($createHabitInput: CreateHabitInput!) {\n  createHabit(createHabitInput: $createHabitInput) {\n    ...HabitFields\n  }\n}\n\nmutation UpdateHabit($updateHabitInput: UpdateHabitInput!) {\n  updateHabit(updateHabitInput: $updateHabitInput) {\n    ...HabitFields\n  }\n}\n\nmutation DeleteHabit($deleteHabitInput: DeleteHabitInput!) {\n  deleteHabit(deleteHabitInput: $deleteHabitInput) {\n    id\n  }\n}\n\nmutation DeleteHabits($deleteHabitsInput: DeleteHabitsInput!) {\n  deleteHabits(deleteHabitsInput: $deleteHabitsInput)\n}\n\nmutation UpsertHabitTracking($createInput: CreateHabitTrackingInput!) {\n  createHabitTracking(createHabitTrackingInput: $createInput) {\n    ...HabitTrackingFields\n  }\n}\n\nmutation DeleteHabitTracking($deleteHabitTracking: DeleteHabitTrackingInput!) {\n  deleteHabitTracking(deleteHabitTracking: $deleteHabitTracking) {\n    ...HabitTrackingFields\n  }\n}\n\nmutation CreateTask($createTaskInput: CreateTaskInput!) {\n  createTask(createTaskInput: $createTaskInput) {\n    ...TaskFields\n  }\n}\n\nmutation UpdateTask($updateTaskInput: UpdateTaskInput!) {\n  updateTask(updateTaskInput: $updateTaskInput) {\n    ...TaskFields\n  }\n}\n\nmutation DeleteTask($where: TaskWhereUniqueInput) {\n  deleteTask(where: $where) {\n    id\n  }\n}\n\nmutation SignIn($signInInput: SigninInput!) {\n  signin(signinInput: $signInInput) {\n    accessToken\n    refreshToken\n    user {\n      id\n      name\n      email\n    }\n  }\n}\n\nmutation RefreshToken {\n  newTokens {\n    accessToken\n    refreshToken\n    user {\n      id\n      name\n      email\n    }\n  }\n}": types.CreateHabitDocument,
    "fragment HabitFields on Habit {\n  id\n  name\n  isPaused\n  dueDate\n  createdAt\n  updatedAt\n}\n\nfragment HabitTrackingFields on HabitTracking {\n  id\n  points\n  date\n  habitId {\n    ...HabitFields\n  }\n}\n\nfragment TasksComplexityFields on TasksComplexity {\n  id\n  name\n  points\n}\n\nfragment TaskFields on Task {\n  id\n  title\n  status\n  points\n  dueDate\n  userId {\n    id\n    name\n  }\n  completedDate\n  createdAt\n  updatedAt\n  complexId {\n    ...TasksComplexityFields\n  }\n}\n\nquery getHabits($isPaused: Boolean, $dueDate: DateTime) {\n  habits(isPaused: $isPaused, dueDate: $dueDate) {\n    ...HabitFields\n  }\n}\n\nquery getHabitTrackings($dateStart: DateTime, $dateEnd: DateTime) {\n  habitTrackings(dateStart: $dateStart, dateEnd: $dateEnd) {\n    ...HabitTrackingFields\n  }\n}\n\nquery getHabitTrackingAggregate($dateStart: DateTime, $dateEnd: DateTime) {\n  habitTrackingsAggregate(dateStart: $dateStart, dateEnd: $dateEnd) {\n    _avg {\n      points\n    }\n    _sum {\n      points\n    }\n  }\n}\n\nquery getTasks($where: TaskWhereInput, $orderBy: [TaskOrderByWithRelationInput!]) {\n  tasks(where: $where, orderBy: $orderBy) {\n    ...TaskFields\n  }\n}\n\nquery getTaskComplexities {\n  taskComplexities {\n    ...TasksComplexityFields\n  }\n}\n\nquery getWeeklyPoints($dateStart: DateTime!, $dateEnd: DateTime!) {\n  getWeeklyPoints(dateStart: $dateStart, dateEnd: $dateEnd) {\n    points\n    pointsAverage\n  }\n}": types.HabitFieldsFragmentDoc,
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
export function graphql(source: "mutation CreateHabit($createHabitInput: CreateHabitInput!) {\n  createHabit(createHabitInput: $createHabitInput) {\n    ...HabitFields\n  }\n}\n\nmutation UpdateHabit($updateHabitInput: UpdateHabitInput!) {\n  updateHabit(updateHabitInput: $updateHabitInput) {\n    ...HabitFields\n  }\n}\n\nmutation DeleteHabit($deleteHabitInput: DeleteHabitInput!) {\n  deleteHabit(deleteHabitInput: $deleteHabitInput) {\n    id\n  }\n}\n\nmutation DeleteHabits($deleteHabitsInput: DeleteHabitsInput!) {\n  deleteHabits(deleteHabitsInput: $deleteHabitsInput)\n}\n\nmutation UpsertHabitTracking($createInput: CreateHabitTrackingInput!) {\n  createHabitTracking(createHabitTrackingInput: $createInput) {\n    ...HabitTrackingFields\n  }\n}\n\nmutation DeleteHabitTracking($deleteHabitTracking: DeleteHabitTrackingInput!) {\n  deleteHabitTracking(deleteHabitTracking: $deleteHabitTracking) {\n    ...HabitTrackingFields\n  }\n}\n\nmutation CreateTask($createTaskInput: CreateTaskInput!) {\n  createTask(createTaskInput: $createTaskInput) {\n    ...TaskFields\n  }\n}\n\nmutation UpdateTask($updateTaskInput: UpdateTaskInput!) {\n  updateTask(updateTaskInput: $updateTaskInput) {\n    ...TaskFields\n  }\n}\n\nmutation DeleteTask($where: TaskWhereUniqueInput) {\n  deleteTask(where: $where) {\n    id\n  }\n}\n\nmutation SignIn($signInInput: SigninInput!) {\n  signin(signinInput: $signInInput) {\n    accessToken\n    refreshToken\n    user {\n      id\n      name\n      email\n    }\n  }\n}\n\nmutation RefreshToken {\n  newTokens {\n    accessToken\n    refreshToken\n    user {\n      id\n      name\n      email\n    }\n  }\n}"): (typeof documents)["mutation CreateHabit($createHabitInput: CreateHabitInput!) {\n  createHabit(createHabitInput: $createHabitInput) {\n    ...HabitFields\n  }\n}\n\nmutation UpdateHabit($updateHabitInput: UpdateHabitInput!) {\n  updateHabit(updateHabitInput: $updateHabitInput) {\n    ...HabitFields\n  }\n}\n\nmutation DeleteHabit($deleteHabitInput: DeleteHabitInput!) {\n  deleteHabit(deleteHabitInput: $deleteHabitInput) {\n    id\n  }\n}\n\nmutation DeleteHabits($deleteHabitsInput: DeleteHabitsInput!) {\n  deleteHabits(deleteHabitsInput: $deleteHabitsInput)\n}\n\nmutation UpsertHabitTracking($createInput: CreateHabitTrackingInput!) {\n  createHabitTracking(createHabitTrackingInput: $createInput) {\n    ...HabitTrackingFields\n  }\n}\n\nmutation DeleteHabitTracking($deleteHabitTracking: DeleteHabitTrackingInput!) {\n  deleteHabitTracking(deleteHabitTracking: $deleteHabitTracking) {\n    ...HabitTrackingFields\n  }\n}\n\nmutation CreateTask($createTaskInput: CreateTaskInput!) {\n  createTask(createTaskInput: $createTaskInput) {\n    ...TaskFields\n  }\n}\n\nmutation UpdateTask($updateTaskInput: UpdateTaskInput!) {\n  updateTask(updateTaskInput: $updateTaskInput) {\n    ...TaskFields\n  }\n}\n\nmutation DeleteTask($where: TaskWhereUniqueInput) {\n  deleteTask(where: $where) {\n    id\n  }\n}\n\nmutation SignIn($signInInput: SigninInput!) {\n  signin(signinInput: $signInInput) {\n    accessToken\n    refreshToken\n    user {\n      id\n      name\n      email\n    }\n  }\n}\n\nmutation RefreshToken {\n  newTokens {\n    accessToken\n    refreshToken\n    user {\n      id\n      name\n      email\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment HabitFields on Habit {\n  id\n  name\n  isPaused\n  dueDate\n  createdAt\n  updatedAt\n}\n\nfragment HabitTrackingFields on HabitTracking {\n  id\n  points\n  date\n  habitId {\n    ...HabitFields\n  }\n}\n\nfragment TasksComplexityFields on TasksComplexity {\n  id\n  name\n  points\n}\n\nfragment TaskFields on Task {\n  id\n  title\n  status\n  points\n  dueDate\n  userId {\n    id\n    name\n  }\n  completedDate\n  createdAt\n  updatedAt\n  complexId {\n    ...TasksComplexityFields\n  }\n}\n\nquery getHabits($isPaused: Boolean, $dueDate: DateTime) {\n  habits(isPaused: $isPaused, dueDate: $dueDate) {\n    ...HabitFields\n  }\n}\n\nquery getHabitTrackings($dateStart: DateTime, $dateEnd: DateTime) {\n  habitTrackings(dateStart: $dateStart, dateEnd: $dateEnd) {\n    ...HabitTrackingFields\n  }\n}\n\nquery getHabitTrackingAggregate($dateStart: DateTime, $dateEnd: DateTime) {\n  habitTrackingsAggregate(dateStart: $dateStart, dateEnd: $dateEnd) {\n    _avg {\n      points\n    }\n    _sum {\n      points\n    }\n  }\n}\n\nquery getTasks($where: TaskWhereInput, $orderBy: [TaskOrderByWithRelationInput!]) {\n  tasks(where: $where, orderBy: $orderBy) {\n    ...TaskFields\n  }\n}\n\nquery getTaskComplexities {\n  taskComplexities {\n    ...TasksComplexityFields\n  }\n}\n\nquery getWeeklyPoints($dateStart: DateTime!, $dateEnd: DateTime!) {\n  getWeeklyPoints(dateStart: $dateStart, dateEnd: $dateEnd) {\n    points\n    pointsAverage\n  }\n}"): (typeof documents)["fragment HabitFields on Habit {\n  id\n  name\n  isPaused\n  dueDate\n  createdAt\n  updatedAt\n}\n\nfragment HabitTrackingFields on HabitTracking {\n  id\n  points\n  date\n  habitId {\n    ...HabitFields\n  }\n}\n\nfragment TasksComplexityFields on TasksComplexity {\n  id\n  name\n  points\n}\n\nfragment TaskFields on Task {\n  id\n  title\n  status\n  points\n  dueDate\n  userId {\n    id\n    name\n  }\n  completedDate\n  createdAt\n  updatedAt\n  complexId {\n    ...TasksComplexityFields\n  }\n}\n\nquery getHabits($isPaused: Boolean, $dueDate: DateTime) {\n  habits(isPaused: $isPaused, dueDate: $dueDate) {\n    ...HabitFields\n  }\n}\n\nquery getHabitTrackings($dateStart: DateTime, $dateEnd: DateTime) {\n  habitTrackings(dateStart: $dateStart, dateEnd: $dateEnd) {\n    ...HabitTrackingFields\n  }\n}\n\nquery getHabitTrackingAggregate($dateStart: DateTime, $dateEnd: DateTime) {\n  habitTrackingsAggregate(dateStart: $dateStart, dateEnd: $dateEnd) {\n    _avg {\n      points\n    }\n    _sum {\n      points\n    }\n  }\n}\n\nquery getTasks($where: TaskWhereInput, $orderBy: [TaskOrderByWithRelationInput!]) {\n  tasks(where: $where, orderBy: $orderBy) {\n    ...TaskFields\n  }\n}\n\nquery getTaskComplexities {\n  taskComplexities {\n    ...TasksComplexityFields\n  }\n}\n\nquery getWeeklyPoints($dateStart: DateTime!, $dateEnd: DateTime!) {\n  getWeeklyPoints(dateStart: $dateStart, dateEnd: $dateEnd) {\n    points\n    pointsAverage\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;