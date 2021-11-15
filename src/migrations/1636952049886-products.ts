import { MigrationInterface, QueryRunner } from "typeorm";

export class products1636952049886 implements MigrationInterface {
    name = 'products1636952049886'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "products" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" text, "created_at" TIMESTAMP NOT NULL DEFAULT 'NOW', "update_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT 'NOW'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT '2021-11-15 04:46:43.534166'`);
        await queryRunner.query(`DROP TABLE "products"`);
    }

}
