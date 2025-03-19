/*
  Warnings:

  - You are about to alter the column `name` on the `Habit` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(30)`.
  - You are about to alter the column `description` on the `Habit` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(200)`.

*/
-- AlterTable
ALTER TABLE "Habit" ALTER COLUMN "name" SET DATA TYPE VARCHAR(30),
ALTER COLUMN "description" SET DATA TYPE VARCHAR(200);
