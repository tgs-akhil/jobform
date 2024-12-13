/*
  Warnings:

  - You are about to alter the column `budget` on the `Shopping` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Shopping" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" TEXT NOT NULL,
    "budget" BIGINT NOT NULL
);
INSERT INTO "new_Shopping" ("budget", "date", "id") SELECT "budget", "date", "id" FROM "Shopping";
DROP TABLE "Shopping";
ALTER TABLE "new_Shopping" RENAME TO "Shopping";
PRAGMA foreign_key_check("Shopping");
PRAGMA foreign_keys=ON;
