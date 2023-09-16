/*
  Warnings:

  - You are about to drop the column `text` on the `MonoEvent` table. All the data in the column will be lost.
  - Added the required column `event` to the `MonoEvent` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "MonoEvent" DROP COLUMN "text",
ADD COLUMN     "event" JSONB NOT NULL;
