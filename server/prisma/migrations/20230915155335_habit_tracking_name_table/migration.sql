/*
  Warnings:

  - You are about to drop the `daily_habit_history` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "daily_habit_history" DROP CONSTRAINT "daily_habit_history_habitId_fkey";

-- DropForeignKey
ALTER TABLE "daily_habit_history" DROP CONSTRAINT "daily_habit_history_userId_fkey";

-- DropTable
DROP TABLE "daily_habit_history";

-- CreateTable
CREATE TABLE "habit_tracking" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "habitId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "points" INTEGER NOT NULL,

    CONSTRAINT "habit_tracking_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "habit_tracking_userId_key" ON "habit_tracking"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "habit_tracking_habitId_key" ON "habit_tracking"("habitId");

-- AddForeignKey
ALTER TABLE "habit_tracking" ADD CONSTRAINT "habit_tracking_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "habit_tracking" ADD CONSTRAINT "habit_tracking_habitId_fkey" FOREIGN KEY ("habitId") REFERENCES "habit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
