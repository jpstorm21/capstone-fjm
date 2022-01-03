import {MigrationInterface, QueryRunner} from "typeorm";

export class relatives1641156134168 implements MigrationInterface {
    name = 'relatives1641156134168'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "relatives" DROP COLUMN "run"`);
        await queryRunner.query(`ALTER TABLE "relatives" DROP COLUMN "passport"`);
        await queryRunner.query(`ALTER TABLE "relatives" ADD "with_you" text`);
        await queryRunner.query(`ALTER TABLE "relatives" ADD "what_does" text`);
        await queryRunner.query(`ALTER TABLE "relatives" ADD "pathologies" text`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT 'NOW'`);
        await queryRunner.query(`ALTER TABLE "countries" ALTER COLUMN "created_at" SET DEFAULT 'NOW'`);
        await queryRunner.query(`ALTER TABLE "records" ALTER COLUMN "created_at" SET DEFAULT 'NOW'`);
        await queryRunner.query(`ALTER TABLE "relatives" ALTER COLUMN "created_at" SET DEFAULT 'NOW'`);
        await queryRunner.query(`ALTER TABLE "states" ALTER COLUMN "created_at" SET DEFAULT 'NOW'`);
        await queryRunner.query(`ALTER TABLE "follow_states" ALTER COLUMN "created_at" SET DEFAULT 'NOW'`);
        await queryRunner.query(`ALTER TABLE "follow" ALTER COLUMN "created_at" SET DEFAULT 'NOW'`);
        await queryRunner.query(`ALTER TABLE "migrant_persons" ALTER COLUMN "created_at" SET DEFAULT 'NOW'`);
        await queryRunner.query(`ALTER TABLE "campus" ALTER COLUMN "created_at" SET DEFAULT 'NOW'`);
        await queryRunner.query(`ALTER TABLE "administratives" ALTER COLUMN "created_at" SET DEFAULT 'NOW'`);
        await queryRunner.query(`ALTER TABLE "super_admins" ALTER COLUMN "created_at" SET DEFAULT 'NOW'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "super_admins" ALTER COLUMN "created_at" SET DEFAULT '2021-12-30 21:03:31.577679'`);
        await queryRunner.query(`ALTER TABLE "administratives" ALTER COLUMN "created_at" SET DEFAULT '2021-12-30 21:03:31.577679'`);
        await queryRunner.query(`ALTER TABLE "campus" ALTER COLUMN "created_at" SET DEFAULT '2021-12-30 21:03:31.577679'`);
        await queryRunner.query(`ALTER TABLE "migrant_persons" ALTER COLUMN "created_at" SET DEFAULT '2021-12-30 21:03:31.577679'`);
        await queryRunner.query(`ALTER TABLE "follow" ALTER COLUMN "created_at" SET DEFAULT '2021-12-30 21:03:31.577679'`);
        await queryRunner.query(`ALTER TABLE "follow_states" ALTER COLUMN "created_at" SET DEFAULT '2021-12-30 21:03:31.577679'`);
        await queryRunner.query(`ALTER TABLE "states" ALTER COLUMN "created_at" SET DEFAULT '2021-12-30 21:03:31.577679'`);
        await queryRunner.query(`ALTER TABLE "relatives" ALTER COLUMN "created_at" SET DEFAULT '2021-12-30 21:03:31.577679'`);
        await queryRunner.query(`ALTER TABLE "records" ALTER COLUMN "created_at" SET DEFAULT '2021-12-30 21:03:31.577679'`);
        await queryRunner.query(`ALTER TABLE "countries" ALTER COLUMN "created_at" SET DEFAULT '2021-12-30 21:03:31.577679'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT '2021-12-30 21:03:31.577679'`);
        await queryRunner.query(`ALTER TABLE "relatives" DROP COLUMN "pathologies"`);
        await queryRunner.query(`ALTER TABLE "relatives" DROP COLUMN "what_does"`);
        await queryRunner.query(`ALTER TABLE "relatives" DROP COLUMN "with_you"`);
        await queryRunner.query(`ALTER TABLE "relatives" ADD "passport" text`);
        await queryRunner.query(`ALTER TABLE "relatives" ADD "run" text`);
    }

}
