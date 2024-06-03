-- DropForeignKey
ALTER TABLE "voluntary_requests" DROP CONSTRAINT "voluntary_requests_address_id_fkey";

-- AlterTable
ALTER TABLE "voluntary_requests" ALTER COLUMN "address_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "voluntary_requests" ADD CONSTRAINT "voluntary_requests_address_id_fkey" FOREIGN KEY ("address_id") REFERENCES "addresses"("id") ON DELETE SET NULL ON UPDATE CASCADE;
