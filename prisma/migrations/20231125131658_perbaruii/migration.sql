/*
  Warnings:

  - A unique constraint covering the columns `[adminId]` on the table `TemplateUndangan` will be added. If there are existing duplicate values, this will fail.
  - Made the column `adminId` on table `templateundangan` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `nama_ayah_pria` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nama_ayah_wanita` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nama_ibu_pria` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nama_ibu_wanita` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nama_pria` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nama_wanita` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `templateundangan` DROP FOREIGN KEY `TemplateUndangan_adminId_fkey`;

-- AlterTable
ALTER TABLE `templateundangan` MODIFY `adminId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `nama_ayah_pria` VARCHAR(191) NOT NULL,
    ADD COLUMN `nama_ayah_wanita` VARCHAR(191) NOT NULL,
    ADD COLUMN `nama_ibu_pria` VARCHAR(191) NOT NULL,
    ADD COLUMN `nama_ibu_wanita` VARCHAR(191) NOT NULL,
    ADD COLUMN `nama_pria` VARCHAR(191) NOT NULL,
    ADD COLUMN `nama_wanita` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `TemplateUndangan_adminId_key` ON `TemplateUndangan`(`adminId`);

-- AddForeignKey
ALTER TABLE `TemplateUndangan` ADD CONSTRAINT `TemplateUndangan_adminId_fkey` FOREIGN KEY (`adminId`) REFERENCES `Admin`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
