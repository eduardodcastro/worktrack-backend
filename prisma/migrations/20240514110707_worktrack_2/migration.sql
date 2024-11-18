/*
  Warnings:

  - Added the required column `id_user` to the `role_user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "role_user" ADD COLUMN     "id_user" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "role_user" ADD CONSTRAINT "role_user_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
