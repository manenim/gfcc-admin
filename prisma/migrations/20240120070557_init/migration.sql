/*
  Warnings:

  - You are about to drop the `Profile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `middleName` on the `Member` table. All the data in the column will be lost.
  - You are about to drop the column `twenty_fourId` on the `Member` table. All the data in the column will be lost.
  - Added the required column `eightId` to the `Member` table without a default value. This is not possible if the table is not empty.
  - Added the required column `leagueId` to the `Twenty_four` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Profile_memberId_key";

-- DropIndex
DROP INDEX "Profile_id_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Profile";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "League" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Eight" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "twenty_fourId" INTEGER NOT NULL,
    CONSTRAINT "Eight_twenty_fourId_fkey" FOREIGN KEY ("twenty_fourId") REFERENCES "Twenty_four" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Member" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "eightId" INTEGER NOT NULL,
    CONSTRAINT "Member_eightId_fkey" FOREIGN KEY ("eightId") REFERENCES "Eight" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Member" ("firstName", "id", "lastName") SELECT "firstName", "id", "lastName" FROM "Member";
DROP TABLE "Member";
ALTER TABLE "new_Member" RENAME TO "Member";
CREATE UNIQUE INDEX "Member_id_key" ON "Member"("id");
CREATE TABLE "new_Twenty_four" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "leagueId" INTEGER NOT NULL,
    CONSTRAINT "Twenty_four_leagueId_fkey" FOREIGN KEY ("leagueId") REFERENCES "League" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Twenty_four" ("id", "name") SELECT "id", "name" FROM "Twenty_four";
DROP TABLE "Twenty_four";
ALTER TABLE "new_Twenty_four" RENAME TO "Twenty_four";
CREATE UNIQUE INDEX "Twenty_four_id_key" ON "Twenty_four"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "League_id_key" ON "League"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Eight_id_key" ON "Eight"("id");
