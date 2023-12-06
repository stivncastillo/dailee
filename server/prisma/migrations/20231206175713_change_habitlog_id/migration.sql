/*
  Warnings:

  - The primary key for the `habit_log` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "habit_log" DROP CONSTRAINT "habit_log_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "habit_log_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "habit_log_id_seq";
