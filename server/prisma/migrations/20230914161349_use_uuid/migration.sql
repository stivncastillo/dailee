/*
  Warnings:

  - The primary key for the `habit` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `task` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `user` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "daily_habit_history" DROP CONSTRAINT "daily_habit_history_habitId_fkey";

-- DropForeignKey
ALTER TABLE "daily_habit_history" DROP CONSTRAINT "daily_habit_history_userId_fkey";

-- AlterTable
ALTER TABLE "daily_habit_history" ALTER COLUMN "userId" SET DATA TYPE TEXT,
ALTER COLUMN "habitId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "habit" DROP CONSTRAINT "habit_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "habit_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "habit_id_seq";

-- AlterTable
ALTER TABLE "task" DROP CONSTRAINT "task_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "task_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "task_id_seq";

-- AlterTable
ALTER TABLE "user" DROP CONSTRAINT "user_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "user_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "user_id_seq";

-- AddForeignKey
ALTER TABLE "daily_habit_history" ADD CONSTRAINT "daily_habit_history_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "daily_habit_history" ADD CONSTRAINT "daily_habit_history_habitId_fkey" FOREIGN KEY ("habitId") REFERENCES "habit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
