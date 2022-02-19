import {MigrationInterface, QueryRunner} from "typeorm";

export class relatives11641160936781 implements MigrationInterface {
    name = 'relatives11641160936781'

    public async up(queryRunner: QueryRunner): Promise<void> {
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
        await queryRunner.query(`ALTER TABLE "super_admins" ALTER COLUMN "created_at" SET DEFAULT '2022-01-02 20:42:31.550028'`);
        await queryRunner.query(`ALTER TABLE "administratives" ALTER COLUMN "created_at" SET DEFAULT '2022-01-02 20:42:31.550028'`);
        await queryRunner.query(`ALTER TABLE "campus" ALTER COLUMN "created_at" SET DEFAULT '2022-01-02 20:42:31.550028'`);
        await queryRunner.query(`ALTER TABLE "migrant_persons" ALTER COLUMN "created_at" SET DEFAULT '2022-01-02 20:42:31.550028'`);
        await queryRunner.query(`ALTER TABLE "follow" ALTER COLUMN "created_at" SET DEFAULT '2022-01-02 20:42:31.550028'`);
        await queryRunner.query(`ALTER TABLE "follow_states" ALTER COLUMN "created_at" SET DEFAULT '2022-01-02 20:42:31.550028'`);
        await queryRunner.query(`ALTER TABLE "states" ALTER COLUMN "created_at" SET DEFAULT '2022-01-02 20:42:31.550028'`);
        await queryRunner.query(`ALTER TABLE "relatives" ALTER COLUMN "created_at" SET DEFAULT '2022-01-02 20:42:31.550028'`);
        await queryRunner.query(`ALTER TABLE "records" ALTER COLUMN "created_at" SET DEFAULT '2022-01-02 20:42:31.550028'`);
        await queryRunner.query(`ALTER TABLE "countries" ALTER COLUMN "created_at" SET DEFAULT '2022-01-02 20:42:31.550028'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT '2022-01-02 20:42:31.550028'`);
    }

}
