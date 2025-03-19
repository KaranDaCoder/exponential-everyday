-- CreateEnum
CREATE TYPE "Status" AS ENUM ('ACTIVE', 'UPCOMING', 'COMPLETED', 'MISSED');

-- CreateTable
CREATE TABLE "Habit" (
    "id" TEXT NOT NULL,
    "category" TEXT NOT NULL DEFAULT 'Other',
    "name" TEXT NOT NULL,
    "description" TEXT,
    "start_date" TIMESTAMP(3) NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'ACTIVE',
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Habit_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Habit_id_key" ON "Habit"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Habit_userId_name_key" ON "Habit"("userId", "name");

-- AddForeignKey
ALTER TABLE "Habit" ADD CONSTRAINT "Habit_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
