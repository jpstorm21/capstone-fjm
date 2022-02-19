import { MigrationInterface, QueryRunner } from 'typeorm';

export class edit11639877557429 implements MigrationInterface {
  name = 'edit11639877557429';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT 'NOW'`,
    );
    await queryRunner.query(
      `ALTER TABLE "campus" ALTER COLUMN "created_at" SET DEFAULT 'NOW'`,
    );
    await queryRunner.query(
      `ALTER TABLE "administratives" ALTER COLUMN "created_at" SET DEFAULT 'NOW'`,
    );
    await queryRunner.query(
      `ALTER TABLE "records" ALTER COLUMN "created_at" SET DEFAULT 'NOW'`,
    );
    await queryRunner.query(
      `ALTER TABLE "relatives" ALTER COLUMN "created_at" SET DEFAULT 'NOW'`,
    );
    await queryRunner.query(
      `ALTER TABLE "migrant_persons" ALTER COLUMN "created_at" SET DEFAULT 'NOW'`,
    );
    await queryRunner.query(
      `ALTER TABLE "countries" ALTER COLUMN "created_at" SET DEFAULT 'NOW'`,
    );
    await queryRunner.query(
      `ALTER TABLE "states" ALTER COLUMN "created_at" SET DEFAULT 'NOW'`,
    );
    await queryRunner.query(
      `ALTER TABLE "follow_states" ALTER COLUMN "created_at" SET DEFAULT 'NOW'`,
    );
    await queryRunner.query(
      `ALTER TABLE "follow" ALTER COLUMN "created_at" SET DEFAULT 'NOW'`,
    );
    await queryRunner.query(
      `ALTER TABLE "super_admins" ALTER COLUMN "created_at" SET DEFAULT 'NOW'`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "super_admins" ALTER COLUMN "created_at" SET DEFAULT '2021-12-18 21:37:44.091407'`,
    );
    await queryRunner.query(
      `ALTER TABLE "follow" ALTER COLUMN "created_at" SET DEFAULT '2021-12-18 21:37:44.091407'`,
    );
    await queryRunner.query(
      `ALTER TABLE "follow_states" ALTER COLUMN "created_at" SET DEFAULT '2021-12-18 21:37:44.091407'`,
    );
    await queryRunner.query(
      `ALTER TABLE "states" ALTER COLUMN "created_at" SET DEFAULT '2021-12-18 21:37:44.091407'`,
    );
    await queryRunner.query(
      `ALTER TABLE "countries" ALTER COLUMN "created_at" SET DEFAULT '2021-12-18 21:37:44.091407'`,
    );
    await queryRunner.query(
      `ALTER TABLE "migrant_persons" ALTER COLUMN "created_at" SET DEFAULT '2021-12-18 21:37:44.091407'`,
    );
    await queryRunner.query(
      `ALTER TABLE "relatives" ALTER COLUMN "created_at" SET DEFAULT '2021-12-18 21:37:44.091407'`,
    );
    await queryRunner.query(
      `ALTER TABLE "records" ALTER COLUMN "created_at" SET DEFAULT '2021-12-18 21:37:44.091407'`,
    );
    await queryRunner.query(
      `ALTER TABLE "administratives" ALTER COLUMN "created_at" SET DEFAULT '2021-12-18 21:37:44.091407'`,
    );
    await queryRunner.query(
      `ALTER TABLE "campus" ALTER COLUMN "created_at" SET DEFAULT '2021-12-18 21:37:44.091407'`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT '2021-12-18 21:37:44.091407'`,
    );
  }
}
