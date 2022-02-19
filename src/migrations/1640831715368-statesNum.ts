import {MigrationInterface, QueryRunner} from "typeorm";

export class statesNum1640831715368 implements MigrationInterface {
    name = 'statesNum1640831715368'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "states" ADD "type_number" integer`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT 'NOW'`);
        await queryRunner.query(`ALTER TABLE "campus" ALTER COLUMN "created_at" SET DEFAULT 'NOW'`);
        await queryRunner.query(`ALTER TABLE "administratives" ALTER COLUMN "created_at" SET DEFAULT 'NOW'`);
        await queryRunner.query(`ALTER TABLE "records" ALTER COLUMN "created_at" SET DEFAULT 'NOW'`);
        await queryRunner.query(`ALTER TABLE "relatives" ALTER COLUMN "created_at" SET DEFAULT 'NOW'`);
        await queryRunner.query(`ALTER TABLE "states" ALTER COLUMN "created_at" SET DEFAULT 'NOW'`);
        await queryRunner.query(`ALTER TABLE "follow_states" ALTER COLUMN "created_at" SET DEFAULT 'NOW'`);
        await queryRunner.query(`ALTER TABLE "follow" ALTER COLUMN "created_at" SET DEFAULT 'NOW'`);
        await queryRunner.query(`ALTER TABLE "migrant_persons" ALTER COLUMN "created_at" SET DEFAULT 'NOW'`);
        await queryRunner.query(`ALTER TABLE "countries" ALTER COLUMN "created_at" SET DEFAULT 'NOW'`);
        await queryRunner.query(`ALTER TABLE "super_admins" ALTER COLUMN "created_at" SET DEFAULT 'NOW'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "super_admins" ALTER COLUMN "created_at" SET DEFAULT '2021-12-30 02:34:34.920392'`);
        await queryRunner.query(`ALTER TABLE "countries" ALTER COLUMN "created_at" SET DEFAULT '2021-12-30 02:34:34.920392'`);
        await queryRunner.query(`ALTER TABLE "migrant_persons" ALTER COLUMN "created_at" SET DEFAULT '2021-12-30 02:34:34.920392'`);
        await queryRunner.query(`ALTER TABLE "follow" ALTER COLUMN "created_at" SET DEFAULT '2021-12-30 02:34:34.920392'`);
        await queryRunner.query(`ALTER TABLE "follow_states" ALTER COLUMN "created_at" SET DEFAULT '2021-12-30 02:34:34.920392'`);
        await queryRunner.query(`ALTER TABLE "states" ALTER COLUMN "created_at" SET DEFAULT '2021-12-30 02:34:34.920392'`);
        await queryRunner.query(`ALTER TABLE "relatives" ALTER COLUMN "created_at" SET DEFAULT '2021-12-30 02:34:34.920392'`);
        await queryRunner.query(`ALTER TABLE "records" ALTER COLUMN "created_at" SET DEFAULT '2021-12-30 02:34:34.920392'`);
        await queryRunner.query(`ALTER TABLE "administratives" ALTER COLUMN "created_at" SET DEFAULT '2021-12-30 02:34:34.920392'`);
        await queryRunner.query(`ALTER TABLE "campus" ALTER COLUMN "created_at" SET DEFAULT '2021-12-30 02:34:34.920392'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT '2021-12-30 02:34:34.920392'`);
        await queryRunner.query(`ALTER TABLE "states" DROP COLUMN "type_number"`);
    }

}
