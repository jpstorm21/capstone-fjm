import {MigrationInterface, QueryRunner} from "typeorm";

export class base1638741531578 implements MigrationInterface {
    name = 'base1638741531578'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" text, "run" text, "email" text, "state" boolean, "password_hash" text, "password_salt" text, "created_at" TIMESTAMP NOT NULL DEFAULT 'NOW', "update_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "campus" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" text, "created_at" TIMESTAMP NOT NULL DEFAULT 'NOW', "update_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_150aa1747b3517c47f9bd98ea6d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "administratives" ("id_administrative" uuid NOT NULL, "id_campus" uuid NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT 'NOW', "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "REL_a2fd3eb1c29362b85d6590f25a" UNIQUE ("id_administrative"), CONSTRAINT "PK_a2fd3eb1c29362b85d6590f25a7" PRIMARY KEY ("id_administrative"))`);
        await queryRunner.query(`CREATE TABLE "records" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "description" text, "date_record" date, "id_migrant_person" uuid NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT 'NOW', "update_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_188149422ee2454660abf1d5ee5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "relatives" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" text, "run" text, "sex" text, "passport" text, "relationship" text, "age" integer, "id_migrant_person" uuid NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT 'NOW', "update_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_4c16d30b6af847a1f7286caf2c3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "migrant_persons" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" text, "age" integer, "run" text NOT NULL, "level_study" text NOT NULL, "sex" text, "civil_status" text NOT NULL, "birth_date" date NOT NULL, "admission_date" date NOT NULL, "dni" text NOT NULL, "passport" text NOT NULL, "phone" text NOT NULL, "email" text NOT NULL, "address" text NOT NULL, "visa" text NOT NULL, "current_occupation" text NOT NULL, "profession" text NOT NULL, "networks_description" text NOT NULL, "derivation_description" text NOT NULL, "chilean_ties" text NOT NULL, "job_placement" text NOT NULL, "type_income" text, "study_validation_process" text NOT NULL, "occupation_country_origen" text NOT NULL, "id_country" uuid NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT 'NOW', "update_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_dee621d2437694d8827fa9d70e4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "countries" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" text, "created_at" TIMESTAMP NOT NULL DEFAULT 'NOW', "update_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_b2d7006793e8697ab3ae2deff18" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "states" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "type" text, "created_at" TIMESTAMP NOT NULL DEFAULT 'NOW', "update_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_09ab30ca0975c02656483265f4f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "follow_states" ("id_follow" uuid NOT NULL, "id_state" uuid NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT 'NOW', "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_14518e92f3e19ed204cedab1436" PRIMARY KEY ("id_follow", "id_state"))`);
        await queryRunner.query(`CREATE TABLE "follow" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "type" text, "created_at" TIMESTAMP NOT NULL DEFAULT 'NOW', "update_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_fda88bc28a84d2d6d06e19df6e5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "super_admins" ("id_admin" uuid NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT 'NOW', "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "REL_5db59d2bc18727a74f11dd9622" UNIQUE ("id_admin"), CONSTRAINT "PK_5db59d2bc18727a74f11dd9622e" PRIMARY KEY ("id_admin"))`);
        await queryRunner.query(`ALTER TABLE "administratives" ADD CONSTRAINT "FK_a2fd3eb1c29362b85d6590f25a7" FOREIGN KEY ("id_administrative") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "administratives" ADD CONSTRAINT "FK_39e9b8a8aad9bcab263ea04965d" FOREIGN KEY ("id_campus") REFERENCES "campus"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "records" ADD CONSTRAINT "FK_c89acf5fc021757c760b3e45707" FOREIGN KEY ("id_migrant_person") REFERENCES "migrant_persons"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "relatives" ADD CONSTRAINT "FK_8b98caa658a4981a376327c9e4f" FOREIGN KEY ("id_migrant_person") REFERENCES "migrant_persons"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "migrant_persons" ADD CONSTRAINT "FK_ff59899ff0bd3b152e39bcab624" FOREIGN KEY ("id_country") REFERENCES "countries"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "follow_states" ADD CONSTRAINT "FK_c63cd8d50032ff5866f7d635db0" FOREIGN KEY ("id_follow") REFERENCES "follow"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "follow_states" ADD CONSTRAINT "FK_476ffe12173b7abd27a84d24cfd" FOREIGN KEY ("id_state") REFERENCES "states"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "super_admins" ADD CONSTRAINT "FK_5db59d2bc18727a74f11dd9622e" FOREIGN KEY ("id_admin") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "super_admins" DROP CONSTRAINT "FK_5db59d2bc18727a74f11dd9622e"`);
        await queryRunner.query(`ALTER TABLE "follow_states" DROP CONSTRAINT "FK_476ffe12173b7abd27a84d24cfd"`);
        await queryRunner.query(`ALTER TABLE "follow_states" DROP CONSTRAINT "FK_c63cd8d50032ff5866f7d635db0"`);
        await queryRunner.query(`ALTER TABLE "migrant_persons" DROP CONSTRAINT "FK_ff59899ff0bd3b152e39bcab624"`);
        await queryRunner.query(`ALTER TABLE "relatives" DROP CONSTRAINT "FK_8b98caa658a4981a376327c9e4f"`);
        await queryRunner.query(`ALTER TABLE "records" DROP CONSTRAINT "FK_c89acf5fc021757c760b3e45707"`);
        await queryRunner.query(`ALTER TABLE "administratives" DROP CONSTRAINT "FK_39e9b8a8aad9bcab263ea04965d"`);
        await queryRunner.query(`ALTER TABLE "administratives" DROP CONSTRAINT "FK_a2fd3eb1c29362b85d6590f25a7"`);
        await queryRunner.query(`DROP TABLE "super_admins"`);
        await queryRunner.query(`DROP TABLE "follow"`);
        await queryRunner.query(`DROP TABLE "follow_states"`);
        await queryRunner.query(`DROP TABLE "states"`);
        await queryRunner.query(`DROP TABLE "countries"`);
        await queryRunner.query(`DROP TABLE "migrant_persons"`);
        await queryRunner.query(`DROP TABLE "relatives"`);
        await queryRunner.query(`DROP TABLE "records"`);
        await queryRunner.query(`DROP TABLE "administratives"`);
        await queryRunner.query(`DROP TABLE "campus"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
