-- CreateTable
CREATE TABLE "Form" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "minSalary" INTEGER NOT NULL,
    "maxSalary" INTEGER NOT NULL,
    "experience" REAL NOT NULL,
    "rating" REAL NOT NULL,
    "minExpectedSal" INTEGER NOT NULL,
    "maxExpectedSal" INTEGER NOT NULL,
    "lastSalary" INTEGER NOT NULL,
    "hiringFee" REAL NOT NULL,
    "evalScore" INTEGER NOT NULL,
    "skills" TEXT NOT NULL,
    "startDate" DATETIME NOT NULL,
    "endDate" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Form_name_key" ON "Form"("name");
