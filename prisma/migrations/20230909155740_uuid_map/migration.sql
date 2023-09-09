/*
  Warnings:

  - The primary key for the `Admin` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Admin" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "login" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL
);
INSERT INTO "new_Admin" ("id", "login", "password_hash") SELECT "id", "login", "password_hash" FROM "Admin";
DROP TABLE "Admin";
ALTER TABLE "new_Admin" RENAME TO "Admin";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
