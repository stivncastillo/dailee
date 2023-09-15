-- DropIndex
DROP INDEX "habit_tracking_habitId_key";

-- DropIndex
DROP INDEX "habit_tracking_userId_key";

-- DropIndex
DROP INDEX "task_complexId_key";

-- DropIndex
DROP INDEX "task_userId_key";

-- AlterTable
ALTER TABLE "task" ALTER COLUMN "userId" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "task" ADD CONSTRAINT "task_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
