import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1724667289714 implements MigrationInterface {
    name = 'InitialMigration1724667289714'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "air_quality" ADD "newColumn" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "air_quality" DROP COLUMN "newColumn"`);
    }

}
