-- DropForeignKey
ALTER TABLE "habit_tracking" DROP CONSTRAINT "habit_tracking_habitId_fkey";

-- DropForeignKey
ALTER TABLE "habit_tracking" DROP CONSTRAINT "habit_tracking_userId_fkey";

-- DropForeignKey
ALTER TABLE "task" DROP CONSTRAINT "task_complexId_fkey";

-- DropForeignKey
ALTER TABLE "task" DROP CONSTRAINT "task_userId_fkey";

-- AlterTable
ALTER TABLE "task" ALTER COLUMN "complexId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "habit_tracking" ADD CONSTRAINT "habit_tracking_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "habit_tracking" ADD CONSTRAINT "habit_tracking_habitId_fkey" FOREIGN KEY ("habitId") REFERENCES "habit"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "task" ADD CONSTRAINT "task_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "task" ADD CONSTRAINT "task_complexId_fkey" FOREIGN KEY ("complexId") REFERENCES "complexities"("id") ON DELETE SET NULL ON UPDATE SET NULL;
