/*
  Warnings:

  - Added the required column `checkin` to the `routes_points` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "routes_points" ADD COLUMN     "checkin" BOOLEAN NOT NULL,
ADD COLUMN     "checkin_photo_key" TEXT;
