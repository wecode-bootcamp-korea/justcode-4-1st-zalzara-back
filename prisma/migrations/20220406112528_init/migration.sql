/*
  Warnings:

  - You are about to drop the column `productId` on the `sizes` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `sizes` DROP FOREIGN KEY `sizes_productId_fkey`;

-- AlterTable
ALTER TABLE `sizes` DROP COLUMN `productId`,
    ADD COLUMN `product_id` INTEGER NULL;

-- CreateTable
CREATE TABLE `shopcarts` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `quantity` INTEGER NOT NULL,
    `product_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `sizes` ADD CONSTRAINT `sizes_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `shopcarts` ADD CONSTRAINT `shopcarts_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
