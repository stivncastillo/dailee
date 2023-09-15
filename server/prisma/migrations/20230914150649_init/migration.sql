/*
  Warnings:

  - You are about to drop the `Complexities` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `DailyHabitHistory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Habit` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Task` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "DailyHabitHistory" DROP CONSTRAINT "DailyHabitHistory_habitId_fkey";

-- DropForeignKey
ALTER TABLE "DailyHabitHistory" DROP CONSTRAINT "DailyHabitHistory_userId_fkey";

-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_complexId_fkey";

-- DropTable
DROP TABLE "Complexities";

-- DropTable
DROP TABLE "DailyHabitHistory";

-- DropTable
DROP TABLE "Habit";

-- DropTable
DROP TABLE "Task";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "habit" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "dueDate" TIMESTAMP(3),
    "isPaused" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "habit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "daily_habit_history" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "habitId" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "points" INTEGER NOT NULL,

    CONSTRAINT "daily_habit_history_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "task" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "dueDate" TIMESTAMP(3),
    "userId" INTEGER NOT NULL,
    "complexId" INTEGER NOT NULL,
    "completedDate" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "task_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "complexities" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "complexities_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "daily_habit_history_userId_key" ON "daily_habit_history"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "daily_habit_history_habitId_key" ON "daily_habit_history"("habitId");

-- CreateIndex
CREATE UNIQUE INDEX "task_userId_key" ON "task"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "task_complexId_key" ON "task"("complexId");

-- AddForeignKey
ALTER TABLE "daily_habit_history" ADD CONSTRAINT "daily_habit_history_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "daily_habit_history" ADD CONSTRAINT "daily_habit_history_habitId_fkey" FOREIGN KEY ("habitId") REFERENCES "habit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "task" ADD CONSTRAINT "task_complexId_fkey" FOREIGN KEY ("complexId") REFERENCES "complexities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
