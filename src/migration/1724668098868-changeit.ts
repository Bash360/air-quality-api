import { MigrationInterface, QueryRunner } from "typeorm";

export class Changeit1724668098868 implements MigrationInterface {
    name = 'Changeit1724668098868'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "air_quality" DROP COLUMN "newColumn"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "air_quality" ADD "newColumn" character varying NOT NULL`);
    }

}
