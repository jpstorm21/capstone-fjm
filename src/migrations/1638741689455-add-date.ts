import { MigrationInterface, QueryRunner } from 'typeorm';

export class addDate1638741689455 implements MigrationInterface {
  name = 'addDate1638741689455';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "follow_states" ADD "date" date NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT 'NOW'`,
    );
    await queryRunner.query(
      `ALTER TABLE "campus" ALTER COLUMN "created_at" SET DEFAULT 'NOW'`,
    );
    await queryRunner.query(
      `ALTER TABLE "administratives" DROP CONSTRAINT "FK_a2fd3eb1c29362b85d6590f25a7"`,
    );
    await queryRunner.query(
      `ALTER TABLE "administratives" ADD CONSTRAINT "UQ_a2fd3eb1c29362b85d6590f25a7" UNIQUE ("id_administrative")`,
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
      `ALTER TABLE "super_admins" DROP CONSTRAINT "FK_5db59d2bc18727a74f11dd9622e"`,
    );
    await queryRunner.query(
      `ALTER TABLE "super_admins" ADD CONSTRAINT "UQ_5db59d2bc18727a74f11dd9622e" UNIQUE ("id_admin")`,
    );
    await queryRunner.query(
      `ALTER TABLE "super_admins" ALTER COLUMN "created_at" SET DEFAULT 'NOW'`,
    );
    await queryRunner.query(
      `ALTER TABLE "administratives" ADD CONSTRAINT "FK_a2fd3eb1c29362b85d6590f25a7" FOREIGN KEY ("id_administrative") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "super_admins" ADD CONSTRAINT "FK_5db59d2bc18727a74f11dd9622e" FOREIGN KEY ("id_admin") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "super_admins" DROP CONSTRAINT "FK_5db59d2bc18727a74f11dd9622e"`,
    );
    await queryRunner.query(
      `ALTER TABLE "administratives" DROP CONSTRAINT "FK_a2fd3eb1c29362b85d6590f25a7"`,
    );
    await queryRunner.query(
      `ALTER TABLE "super_admins" ALTER COLUMN "created_at" SET DEFAULT '2021-12-05 21:59:09.73299'`,
    );
    await queryRunner.query(
      `ALTER TABLE "super_admins" DROP CONSTRAINT "UQ_5db59d2bc18727a74f11dd9622e"`,
    );
    await queryRunner.query(
      `ALTER TABLE "super_admins" ADD CONSTRAINT "FK_5db59d2bc18727a74f11dd9622e" FOREIGN KEY ("id_admin") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "follow" ALTER COLUMN "created_at" SET DEFAULT '2021-12-05 21:59:09.73299'`,
    );
    await queryRunner.query(
      `ALTER TABLE "follow_states" ALTER COLUMN "created_at" SET DEFAULT '2021-12-05 21:59:09.73299'`,
    );
    await queryRunner.query(
      `ALTER TABLE "states" ALTER COLUMN "created_at" SET DEFAULT '2021-12-05 21:59:09.73299'`,
    );
    await queryRunner.query(
      `ALTER TABLE "countries" ALTER COLUMN "created_at" SET DEFAULT '2021-12-05 21:59:09.73299'`,
    );
    await queryRunner.query(
      `ALTER TABLE "migrant_persons" ALTER COLUMN "created_at" SET DEFAULT '2021-12-05 21:59:09.73299'`,
    );
    await queryRunner.query(
      `ALTER TABLE "relatives" ALTER COLUMN "created_at" SET DEFAULT '2021-12-05 21:59:09.73299'`,
    );
    await queryRunner.query(
      `ALTER TABLE "records" ALTER COLUMN "created_at" SET DEFAULT '2021-12-05 21:59:09.73299'`,
    );
    await queryRunner.query(
      `ALTER TABLE "administratives" ALTER COLUMN "created_at" SET DEFAULT '2021-12-05 21:59:09.73299'`,
    );
    await queryRunner.query(
      `ALTER TABLE "administratives" DROP CONSTRAINT "UQ_a2fd3eb1c29362b85d6590f25a7"`,
    );
    await queryRunner.query(
      `ALTER TABLE "administratives" ADD CONSTRAINT "FK_a2fd3eb1c29362b85d6590f25a7" FOREIGN KEY ("id_administrative") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "campus" ALTER COLUMN "created_at" SET DEFAULT '2021-12-05 21:59:09.73299'`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT '2021-12-05 21:59:09.73299'`,
    );
    await queryRunner.query(`ALTER TABLE "follow_states" DROP COLUMN "date"`);
  }
}
