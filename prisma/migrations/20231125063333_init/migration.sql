-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TemplateUndangan" (
    "id" SERIAL NOT NULL,
    "nama" TEXT,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "TemplateUndangan_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "TemplateUndangan_userId_key" ON "TemplateUndangan"("userId");

-- AddForeignKey
ALTER TABLE "TemplateUndangan" ADD CONSTRAINT "TemplateUndangan_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
