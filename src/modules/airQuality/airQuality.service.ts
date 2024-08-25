import { IAirQualityService } from "../../interfaces/IAirQualityService";
import { AirQualityType } from "../../types/airQuality.type";

export class AirQualityService implements IAirQualityService​​{
  getNearestCity(): AirQualityType {
    throw new Error("Method not implemented.");
  }
  getByCoordinates(latitude: number, longitude: number): AirQualityType {
    throw new Error("Method not implemented.");
  }

}