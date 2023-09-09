/*
  Warnings:

  - You are about to drop the column `login` on the `Admin` table. All the data in the column will be lost.
  - Added the required column `nick_name` to the `Admin` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Admin" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nick_name" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL
);
INSERT INTO "new_Admin" ("id", "password_hash") SELECT "id", "password_hash" FROM "Admin";
DROP TABLE "Admin";
ALTER TABLE "new_Admin" RENAME TO "Admin";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
