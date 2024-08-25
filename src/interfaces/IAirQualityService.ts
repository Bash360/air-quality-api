import { AirQualityType } from "../types/airQuality.type";

export interface IAirQualityService{
  getNearestCity(): Promise<AirQualityType>;

  getByCoordinates(latitude:number,longitude:number): Promise<AirQualityType>;
  
}