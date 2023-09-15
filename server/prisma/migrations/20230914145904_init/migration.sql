-- CreateTable
CREATE TABLE "Habit" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "dueDate" TIMESTAMP(3),
    "isPaused" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Habit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DailyHabitHistory" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "habitId" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "points" INTEGER NOT NULL,

    CONSTRAINT "DailyHabitHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Task" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "dueDate" TIMESTAMP(3),
    "userId" INTEGER NOT NULL,
    "complexId" INTEGER NOT NULL,
    "completedDate" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Complexities" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Complexities_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DailyHabitHistory_userId_key" ON "DailyHabitHistory"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "DailyHabitHistory_habitId_key" ON "DailyHabitHistory"("habitId");

-- CreateIndex
CREATE UNIQUE INDEX "Task_userId_key" ON "Task"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Task_complexId_key" ON "Task"("complexId");

-- AddForeignKey
ALTER TABLE "DailyHabitHistory" ADD CONSTRAINT "DailyHabitHistory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DailyHabitHistory" ADD CONSTRAINT "DailyHabitHistory_habitId_fkey" FOREIGN KEY ("habitId") REFERENCES "Habit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_complexId_fkey" FOREIGN KEY ("complexId") REFERENCES "Complexities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
