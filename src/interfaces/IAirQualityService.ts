import { AirQualityType } from "../types/airQuality.type";

export interface IAirQualityService{
  getNearestCity(): AirQualityType;

  getByCoordinates(latitude:number,longitude:number): AirQualityType;
  
}