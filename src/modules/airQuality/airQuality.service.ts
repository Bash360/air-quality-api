import { HttpStatusCode } from "axios";
import Utility from "../../common/helpers/utilities";
import { StandardResponse } from "../../common/response";
import dataSource from "../../config/dataSource";
import { AirQualityType } from "../../types/airQuality.type";
import AirQualityRepository from "./airQuality.repository";
import { AirQualityDto } from "./dtos/airQuality.dto";
import { AirQuality } from "./entities/airQuality.entity";
import { ENV } from "../../config/env.config";
import MostPollutedDto from "./dtos/mostPolluted.dto";

export class AirQualityService {
  private readonly airQualityRepository: AirQualityRepository;

  constructor() {
    const airQualityRepo = dataSource.getRepository(AirQuality);
    this.airQualityRepository = new AirQualityRepository(airQualityRepo);
  }

  async addAirQualityParis(): Promise<AirQuality> {
    const {
      pollution,
      state,
      country,
      city,
      latitude,
      longitude,
    }: AirQualityType = await Utility.getByCoordinates(
      Number(ENV.PARIS_LATITUDE),
      Number(ENV.PARIS_LONGITUDE)
    );

    const newAirQuality: AirQuality = await this.airQualityRepository.create({
      pollution,
      city,
      country,
      state,
      coordinates: { latitude, longitude },
    });

    return newAirQuality;
  }

  async getByCoordinates(
    latitude: number,
    longitude: number
  ): Promise<StandardResponse<AirQualityDto>> {
    const result: AirQualityType = await Utility.getByCoordinates(
      latitude,
      longitude
    );

    const responseDto: AirQualityDto = { pollution: result["pollution"] };

    return new StandardResponse<AirQualityDto>(HttpStatusCode.Ok, responseDto);
  }

  async getMostPolluted(): Promise<StandardResponse<MostPollutedDto>> {
    try {
      const mostPolluted: AirQuality =
        await this.airQualityRepository.findMostPolluted();

      const responseDto: MostPollutedDto = {
        dateTime: mostPolluted.createdAt,
        aqius: mostPolluted.pollution.aqius,
      };

      return new StandardResponse<MostPollutedDto>(
        HttpStatusCode.Ok,
        responseDto
      );
    } catch (error) {
      console.log(error);
    }
  }
}
