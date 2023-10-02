/*
  Warnings:

  - You are about to drop the `complexities` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "task" DROP CONSTRAINT "task_complexId_fkey";

-- AlterTable
ALTER TABLE "task" ADD COLUMN     "points" INTEGER;

-- DropTable
DROP TABLE "complexities";

-- CreateTable
CREATE TABLE "task_complexities" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "points" INTEGER NOT NULL,

    CONSTRAINT "task_complexities_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "task" ADD CONSTRAINT "task_complexId_fkey" FOREIGN KEY ("complexId") REFERENCES "task_complexities"("id") ON DELETE SET NULL ON UPDATE SET NULL;
