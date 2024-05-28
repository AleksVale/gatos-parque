/*
  Warnings:

  - Added the required column `status` to the `feeds` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "feeds" ADD COLUMN     "status" BOOLEAN NOT NULL;
