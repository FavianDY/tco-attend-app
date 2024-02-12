-- CreateTable
CREATE TABLE "Absen" (
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

    CONSTRAINT "Absen_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Auth" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Auth_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Absen_email_key" ON "Absen"("email");
