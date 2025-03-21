/*
  Warnings:

  - The `timezone` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "TimeZone" AS ENUM ('AMERICA_CHICAGO', 'AMERICA_NEW_YORK', 'AMERICA_DENVER', 'AMERICA_LOS_ANGELES', 'ASIA_KOLKATA');

-- AlterTable
ALTER TABLE "User" DROP COLUMN "timezone",
ADD COLUMN     "timezone" "TimeZone" NOT NULL DEFAULT 'AMERICA_CHICAGO';

-- DropEnum
DROP TYPE "TimZone";
