/*
  Warnings:

  - You are about to drop the column `set_reminder` on the `habit` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "habit" DROP COLUMN "set_reminder";

-- CreateTable
CREATE TABLE "HabitTracker" (
    "id" TEXT NOT NULL,
    "logged_at" TIMESTAMP(3) NOT NULL,
    "notes" VARCHAR(120),
    "daily_difficulty" DECIMAL(65,30) NOT NULL DEFAULT 1.00,
    "expected_difficulty" DECIMAL(65,30) NOT NULL DEFAULT 1.01,
    "status" "Status" NOT NULL DEFAULT 'ACTIVE',
    "userId" TEXT NOT NULL,
    "habitId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "HabitTracker_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "HabitTracker_id_key" ON "HabitTracker"("id");

-- CreateIndex
CREATE INDEX "HabitTracker_logged_at_idx" ON "HabitTracker"("logged_at");

-- CreateIndex
CREATE UNIQUE INDEX "HabitTracker_habitId_logged_at_key" ON "HabitTracker"("habitId", "logged_at");

-- AddForeignKey
ALTER TABLE "HabitTracker" ADD CONSTRAINT "HabitTracker_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HabitTracker" ADD CONSTRAINT "HabitTracker_habitId_fkey" FOREIGN KEY ("habitId") REFERENCES "habit"("id") ON DELETE CASCADE ON UPDATE CASCADE;
