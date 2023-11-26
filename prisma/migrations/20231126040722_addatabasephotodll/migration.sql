-- CreateTable
CREATE TABLE "Admin" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TemplateUndangan" (
    "id" SERIAL NOT NULL,
    "nama" TEXT,
    "adminId" INTEGER NOT NULL,

    CONSTRAINT "TemplateUndangan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nama_pria" TEXT NOT NULL,
    "nama_ayah_pria" TEXT NOT NULL,
    "nama_ibu_pria" TEXT NOT NULL,
    "nama_wanita" TEXT NOT NULL,
    "nama_ayah_wanita" TEXT NOT NULL,
    "nama_ibu_wanita" TEXT NOT NULL,
    "templateId" INTEGER,
    "pria_fb" TEXT,
    "pria_ig" TEXT,
    "pria_tk" TEXT,
    "wanita_fb" TEXT,
    "wanita_ig" TEXT,
    "wanita_tk" TEXT,
    "url_foto_pria" TEXT,
    "url_foto_wanita" TEXT,
    "url_foto_utama" TEXT,
    "waktu_akad_nikah" TIMESTAMP(3),
    "waktu_resepsi" TIMESTAMP(3),
    "alamat_akad_nikah" TEXT,
    "alamat_resepsi" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Admin_email_key" ON "Admin"("email");

-- CreateIndex
CREATE UNIQUE INDEX "TemplateUndangan_adminId_key" ON "TemplateUndangan"("adminId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "TemplateUndangan" ADD CONSTRAINT "TemplateUndangan_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "TemplateUndangan"("id") ON DELETE SET NULL ON UPDATE CASCADE;
