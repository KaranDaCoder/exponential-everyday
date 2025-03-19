/*
  Warnings:

  - The `category` column on the `Habit` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "HabitCategory" AS ENUM ('HEALTH_FITNESS', 'PERSONAL_GROWTH', 'PRODUCTIVITY', 'MENTAL_WELLBEING', 'RELATIONSHIPS', 'FINANCES', 'SUSTAINABILITY', 'OTHER');

-- AlterTable
ALTER TABLE "Habit" DROP COLUMN "category",
ADD COLUMN     "category" "HabitCategory" NOT NULL DEFAULT 'OTHER';
