import { Repository } from "typeorm";
import BaseRepository from "../../common/base/base.repository";
import { AirQuality } from "./entities/airQuality.entity";

export default class AirQualityRepository extends BaseRepository<AirQuality> {
  constructor(airQualityRepository: Repository<AirQuality>) {
    super(airQualityRepository);
  }
  public async findMostPolluted(): Promise<AirQuality> {
    const queryBuilder = this.getQueryBuilder("AirQuality");

    const entity = await queryBuilder
      .orderBy(`"AirQuality"."pollution"->>'aqius'`, "DESC")
      .getOne();
    return entity;
  }
}
