import {MigrationInterface, QueryRunner} from "typeorm";

export class migrantCountry1640126245784 implements MigrationInterface {
    name = 'migrantCountry1640126245784'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "migrant_persons" ADD "id_country" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT 'NOW'`);
        await queryRunner.query(`ALTER TABLE "campus" ALTER COLUMN "created_at" SET DEFAULT 'NOW'`);
        await queryRunner.query(`ALTER TABLE "administratives" ALTER COLUMN "created_at" SET DEFAULT 'NOW'`);
        await queryRunner.query(`ALTER TABLE "records" ALTER COLUMN "created_at" SET DEFAULT 'NOW'`);
        await queryRunner.query(`ALTER TABLE "relatives" ALTER COLUMN "created_at" SET DEFAULT 'NOW'`);
        await queryRunner.query(`ALTER TABLE "migrant_persons" ALTER COLUMN "created_at" SET DEFAULT 'NOW'`);
        await queryRunner.query(`ALTER TABLE "countries" ALTER COLUMN "created_at" SET DEFAULT 'NOW'`);
        await queryRunner.query(`ALTER TABLE "states" ALTER COLUMN "created_at" SET DEFAULT 'NOW'`);
        await queryRunner.query(`ALTER TABLE "follow_states" ALTER COLUMN "created_at" SET DEFAULT 'NOW'`);
        await queryRunner.query(`ALTER TABLE "follow" ALTER COLUMN "created_at" SET DEFAULT 'NOW'`);
        await queryRunner.query(`ALTER TABLE "super_admins" ALTER COLUMN "created_at" SET DEFAULT 'NOW'`);
        await queryRunner.query(`ALTER TABLE "migrant_persons" ADD CONSTRAINT "FK_ff59899ff0bd3b152e39bcab624" FOREIGN KEY ("id_country") REFERENCES "countries"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "migrant_persons" DROP CONSTRAINT "FK_ff59899ff0bd3b152e39bcab624"`);
        await queryRunner.query(`ALTER TABLE "super_admins" ALTER COLUMN "created_at" SET DEFAULT '2021-12-21 04:21:01.365636'`);
        await queryRunner.query(`ALTER TABLE "follow" ALTER COLUMN "created_at" SET DEFAULT '2021-12-21 04:21:01.365636'`);
        await queryRunner.query(`ALTER TABLE "follow_states" ALTER COLUMN "created_at" SET DEFAULT '2021-12-21 04:21:01.365636'`);
        await queryRunner.query(`ALTER TABLE "states" ALTER COLUMN "created_at" SET DEFAULT '2021-12-21 04:21:01.365636'`);
        await queryRunner.query(`ALTER TABLE "countries" ALTER COLUMN "created_at" SET DEFAULT '2021-12-21 04:21:01.365636'`);
        await queryRunner.query(`ALTER TABLE "migrant_persons" ALTER COLUMN "created_at" SET DEFAULT '2021-12-21 04:21:01.365636'`);
        await queryRunner.query(`ALTER TABLE "relatives" ALTER COLUMN "created_at" SET DEFAULT '2021-12-21 04:21:01.365636'`);
        await queryRunner.query(`ALTER TABLE "records" ALTER COLUMN "created_at" SET DEFAULT '2021-12-21 04:21:01.365636'`);
        await queryRunner.query(`ALTER TABLE "administratives" ALTER COLUMN "created_at" SET DEFAULT '2021-12-21 04:21:01.365636'`);
        await queryRunner.query(`ALTER TABLE "campus" ALTER COLUMN "created_at" SET DEFAULT '2021-12-21 04:21:01.365636'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT '2021-12-21 04:21:01.365636'`);
        await queryRunner.query(`ALTER TABLE "migrant_persons" DROP COLUMN "id_country"`);
    }

}
