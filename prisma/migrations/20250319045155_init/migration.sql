/*
  Warnings:

  - You are about to drop the `Habit` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Habit" DROP CONSTRAINT "Habit_userId_fkey";

-- DropTable
DROP TABLE "Habit";

-- CreateTable
CREATE TABLE "habit" (
    "id" TEXT NOT NULL,
    "category" "HabitCategory" NOT NULL DEFAULT 'OTHER',
    "name" VARCHAR(30) NOT NULL,
    "description" VARCHAR(200),
    "start_date" TIMESTAMP(3) NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'ACTIVE',
    "set_reminder" BOOLEAN NOT NULL DEFAULT false,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "habit_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "habit_id_key" ON "habit"("id");

-- CreateIndex
CREATE INDEX "habit_name_idx" ON "habit"("name");

-- CreateIndex
CREATE UNIQUE INDEX "habit_userId_name_key" ON "habit"("userId", "name");

-- AddForeignKey
ALTER TABLE "habit" ADD CONSTRAINT "habit_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
