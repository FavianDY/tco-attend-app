/*
  Warnings:

  - You are about to drop the `Absen` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Absen";

-- CreateTable
CREATE TABLE "Absensi" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "employeeStatus" TEXT NOT NULL,
    "squad" TEXT NOT NULL,
    "condition" TEXT NOT NULL,
    "conditionDesc" TEXT NOT NULL,
    "workFrom" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "workPlan" TEXT NOT NULL,

    CONSTRAINT "Absensi_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Absensi_email_key" ON "Absensi"("email");
