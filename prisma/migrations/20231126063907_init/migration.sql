-- CreateTable
CREATE TABLE `Admin` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Admin_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TemplateUndangan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama` VARCHAR(191) NULL,
    `adminId` INTEGER NOT NULL,

    UNIQUE INDEX `TemplateUndangan_adminId_key`(`adminId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `nama_pria` VARCHAR(191) NOT NULL,
    `nama_ayah_pria` VARCHAR(191) NOT NULL,
    `nama_ibu_pria` VARCHAR(191) NOT NULL,
    `nama_wanita` VARCHAR(191) NOT NULL,
    `nama_ayah_wanita` VARCHAR(191) NOT NULL,
    `nama_ibu_wanita` VARCHAR(191) NOT NULL,
    `templateId` INTEGER NULL,
    `pria_fb` VARCHAR(191) NULL,
    `pria_ig` VARCHAR(191) NULL,
    `pria_tk` VARCHAR(191) NULL,
    `wanita_fb` VARCHAR(191) NULL,
    `wanita_ig` VARCHAR(191) NULL,
    `wanita_tk` VARCHAR(191) NULL,
    `url_foto_pria` VARCHAR(191) NULL,
    `url_foto_wanita` VARCHAR(191) NULL,
    `url_foto_utama` VARCHAR(191) NULL,
    `waktu_akad_nikah` DATETIME(3) NULL,
    `waktu_resepsi` DATETIME(3) NULL,
    `alamat_akad_nikah` VARCHAR(191) NULL,
    `alamat_resepsi` VARCHAR(191) NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `TemplateUndangan` ADD CONSTRAINT `TemplateUndangan_adminId_fkey` FOREIGN KEY (`adminId`) REFERENCES `Admin`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_templateId_fkey` FOREIGN KEY (`templateId`) REFERENCES `TemplateUndangan`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
