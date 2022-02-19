import { MigrationInterface, QueryRunner } from 'typeorm';

export class edit1639863391640 implements MigrationInterface {
  name = 'edit1639863391640';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "migrant_persons" ADD "other" text NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "migrant_persons" ADD "visa_state" text NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "migrant_persons" ADD "resident_ties" text NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "migrant_persons" ADD "reason_consultation" text NOT NULL`,
    );
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
      `ALTER TABLE "super_admins" ALTER COLUMN "created_at" SET DEFAULT '2021-12-16 05:13:06.819831'`,
    );
    await queryRunner.query(
      `ALTER TABLE "follow" ALTER COLUMN "created_at" SET DEFAULT '2021-12-16 05:13:06.819831'`,
    );
    await queryRunner.query(
      `ALTER TABLE "follow_states" ALTER COLUMN "created_at" SET DEFAULT '2021-12-16 05:13:06.819831'`,
    );
    await queryRunner.query(
      `ALTER TABLE "states" ALTER COLUMN "created_at" SET DEFAULT '2021-12-16 05:13:06.819831'`,
    );
    await queryRunner.query(
      `ALTER TABLE "countries" ALTER COLUMN "created_at" SET DEFAULT '2021-12-16 05:13:06.819831'`,
    );
    await queryRunner.query(
      `ALTER TABLE "migrant_persons" ALTER COLUMN "created_at" SET DEFAULT '2021-12-16 05:13:06.819831'`,
    );
    await queryRunner.query(
      `ALTER TABLE "relatives" ALTER COLUMN "created_at" SET DEFAULT '2021-12-16 05:13:06.819831'`,
    );
    await queryRunner.query(
      `ALTER TABLE "records" ALTER COLUMN "created_at" SET DEFAULT '2021-12-16 05:13:06.819831'`,
    );
    await queryRunner.query(
      `ALTER TABLE "administratives" ALTER COLUMN "created_at" SET DEFAULT '2021-12-16 05:13:06.819831'`,
    );
    await queryRunner.query(
      `ALTER TABLE "campus" ALTER COLUMN "created_at" SET DEFAULT '2021-12-16 05:13:06.819831'`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT '2021-12-16 05:13:06.819831'`,
    );
    await queryRunner.query(
      `ALTER TABLE "migrant_persons" DROP COLUMN "reason_consultation"`,
    );
    await queryRunner.query(
      `ALTER TABLE "migrant_persons" DROP COLUMN "resident_ties"`,
    );
    await queryRunner.query(
      `ALTER TABLE "migrant_persons" DROP COLUMN "visa_state"`,
    );
    await queryRunner.query(
      `ALTER TABLE "migrant_persons" DROP COLUMN "other"`,
    );
  }
}
