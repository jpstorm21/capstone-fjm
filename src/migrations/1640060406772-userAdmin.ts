import {MigrationInterface, QueryRunner} from "typeorm";

export class userAdmin1640060406772 implements MigrationInterface {
    name = 'userAdmin1640060406772'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "follow_states" ADD "comments" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "name" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "run" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "email" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "state" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "password_hash" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "password_salt" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT 'NOW'`);
        await queryRunner.query(`ALTER TABLE "campus" ALTER COLUMN "created_at" SET DEFAULT 'NOW'`);
        await queryRunner.query(`ALTER TABLE "administratives" DROP CONSTRAINT "FK_a2fd3eb1c29362b85d6590f25a7"`);
        await queryRunner.query(`ALTER TABLE "administratives" DROP CONSTRAINT "UQ_a2fd3eb1c29362b85d6590f25a7"`);
        await queryRunner.query(`ALTER TABLE "administratives" ALTER COLUMN "created_at" SET DEFAULT 'NOW'`);
        await queryRunner.query(`ALTER TABLE "countries" ALTER COLUMN "created_at" SET DEFAULT 'NOW'`);
        await queryRunner.query(`ALTER TABLE "states" ALTER COLUMN "created_at" SET DEFAULT 'NOW'`);
        await queryRunner.query(`ALTER TABLE "follow_states" ALTER COLUMN "created_at" SET DEFAULT 'NOW'`);
        await queryRunner.query(`ALTER TABLE "follow" ALTER COLUMN "created_at" SET DEFAULT 'NOW'`);
        await queryRunner.query(`ALTER TABLE "records" ALTER COLUMN "created_at" SET DEFAULT 'NOW'`);
        await queryRunner.query(`ALTER TABLE "relatives" ALTER COLUMN "created_at" SET DEFAULT 'NOW'`);
        await queryRunner.query(`ALTER TABLE "migrant_persons" ALTER COLUMN "name" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "migrant_persons" ALTER COLUMN "age" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "migrant_persons" ALTER COLUMN "run" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "migrant_persons" ALTER COLUMN "other" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "migrant_persons" ALTER COLUMN "level_study" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "migrant_persons" ALTER COLUMN "sex" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "migrant_persons" ALTER COLUMN "civil_status" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "migrant_persons" ALTER COLUMN "birth_date" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "migrant_persons" ALTER COLUMN "admission_date" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "migrant_persons" ALTER COLUMN "dni" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "migrant_persons" ALTER COLUMN "passport" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "migrant_persons" ALTER COLUMN "phone" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "migrant_persons" ALTER COLUMN "email" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "migrant_persons" ALTER COLUMN "address" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "migrant_persons" ALTER COLUMN "visa" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "migrant_persons" ALTER COLUMN "visa_state" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "migrant_persons" ALTER COLUMN "current_occupation" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "migrant_persons" ALTER COLUMN "profession" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "migrant_persons" ALTER COLUMN "networks_description" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "migrant_persons" ALTER COLUMN "derivation_description" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "migrant_persons" ALTER COLUMN "chilean_ties" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "migrant_persons" ALTER COLUMN "resident_ties" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "migrant_persons" ALTER COLUMN "reason_consultation" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "migrant_persons" ALTER COLUMN "job_placement" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "migrant_persons" ALTER COLUMN "type_income" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "migrant_persons" ALTER COLUMN "study_validation_process" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "migrant_persons" ALTER COLUMN "occupation_country_origen" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "migrant_persons" ALTER COLUMN "created_at" SET DEFAULT 'NOW'`);
        await queryRunner.query(`ALTER TABLE "super_admins" ALTER COLUMN "created_at" SET DEFAULT 'NOW'`);
        await queryRunner.query(`ALTER TABLE "administratives" ADD CONSTRAINT "FK_a2fd3eb1c29362b85d6590f25a7" FOREIGN KEY ("id_administrative") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "administratives" DROP CONSTRAINT "FK_a2fd3eb1c29362b85d6590f25a7"`);
        await queryRunner.query(`ALTER TABLE "super_admins" ALTER COLUMN "created_at" SET DEFAULT '2021-12-19 03:43:32.142605'`);
        await queryRunner.query(`ALTER TABLE "migrant_persons" ALTER COLUMN "created_at" SET DEFAULT '2021-12-19 03:43:32.142605'`);
        await queryRunner.query(`ALTER TABLE "migrant_persons" ALTER COLUMN "occupation_country_origen" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "migrant_persons" ALTER COLUMN "study_validation_process" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "migrant_persons" ALTER COLUMN "type_income" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "migrant_persons" ALTER COLUMN "job_placement" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "migrant_persons" ALTER COLUMN "reason_consultation" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "migrant_persons" ALTER COLUMN "resident_ties" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "migrant_persons" ALTER COLUMN "chilean_ties" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "migrant_persons" ALTER COLUMN "derivation_description" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "migrant_persons" ALTER COLUMN "networks_description" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "migrant_persons" ALTER COLUMN "profession" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "migrant_persons" ALTER COLUMN "current_occupation" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "migrant_persons" ALTER COLUMN "visa_state" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "migrant_persons" ALTER COLUMN "visa" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "migrant_persons" ALTER COLUMN "address" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "migrant_persons" ALTER COLUMN "email" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "migrant_persons" ALTER COLUMN "phone" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "migrant_persons" ALTER COLUMN "passport" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "migrant_persons" ALTER COLUMN "dni" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "migrant_persons" ALTER COLUMN "admission_date" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "migrant_persons" ALTER COLUMN "birth_date" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "migrant_persons" ALTER COLUMN "civil_status" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "migrant_persons" ALTER COLUMN "sex" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "migrant_persons" ALTER COLUMN "level_study" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "migrant_persons" ALTER COLUMN "other" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "migrant_persons" ALTER COLUMN "run" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "migrant_persons" ALTER COLUMN "age" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "migrant_persons" ALTER COLUMN "name" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "relatives" ALTER COLUMN "created_at" SET DEFAULT '2021-12-19 03:43:32.142605'`);
        await queryRunner.query(`ALTER TABLE "records" ALTER COLUMN "created_at" SET DEFAULT '2021-12-19 03:43:32.142605'`);
        await queryRunner.query(`ALTER TABLE "follow" ALTER COLUMN "created_at" SET DEFAULT '2021-12-19 03:43:32.142605'`);
        await queryRunner.query(`ALTER TABLE "follow_states" ALTER COLUMN "created_at" SET DEFAULT '2021-12-19 03:43:32.142605'`);
        await queryRunner.query(`ALTER TABLE "states" ALTER COLUMN "created_at" SET DEFAULT '2021-12-19 03:43:32.142605'`);
        await queryRunner.query(`ALTER TABLE "countries" ALTER COLUMN "created_at" SET DEFAULT '2021-12-19 03:43:32.142605'`);
        await queryRunner.query(`ALTER TABLE "administratives" ALTER COLUMN "created_at" SET DEFAULT '2021-12-19 03:43:32.142605'`);
        await queryRunner.query(`ALTER TABLE "administratives" ADD CONSTRAINT "UQ_a2fd3eb1c29362b85d6590f25a7" UNIQUE ("id_administrative")`);
        await queryRunner.query(`ALTER TABLE "administratives" ADD CONSTRAINT "FK_a2fd3eb1c29362b85d6590f25a7" FOREIGN KEY ("id_administrative") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "campus" ALTER COLUMN "created_at" SET DEFAULT '2021-12-19 03:43:32.142605'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT '2021-12-19 03:43:32.142605'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "password_salt" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "password_hash" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "state" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "email" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "run" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "name" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "follow_states" DROP COLUMN "comments"`);
    }

}
