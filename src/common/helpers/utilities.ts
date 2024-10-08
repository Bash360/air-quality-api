import { ENV } from "../../config/env.config";
import logger from "../../config/logger";
import { AirQualityType } from "../../types/airQuality.type";
import axios from "axios";

export default class Utility {
  static isValidCoordinates(latitude: number, longitude: number): boolean {
    const isLatitudeValid = latitude >= -90 && latitude <= 90;
    const isLongitudeValid = longitude >= -180 && longitude <= 180;
    return isLatitudeValid && isLongitudeValid;
  }

  static async getByCoordinates(
    latitude: number,
    longitude: number
  ): Promise<AirQualityType> {

    if (!Utility.isValidCoordinates(latitude, longitude)) {
      throw new Error("invalid value for latitude/longitude")
    }

    const apiKey = ENV.AQ_API_KEY;
    const url = `${ENV.AQ_API_ENDPOINT}/v2/nearest_city?lat=${latitude}&lon=${longitude}&key=${apiKey}`;
    
    try {
      const { data } = (await axios.get(url)).data;
      const {
        city,
        state,
        country,
        location: { coordinates },
        current: { pollution },
      } = data;

      return {
        city,
        state,
        country,
        latitude: coordinates[1],
        longitude: coordinates[0],
        pollution,
      };
    } catch (error) {
      logger.error("Utility.getByCoordinates: Error fetching air quality data", error);
      throw new Error("Failed fetching air quality data");
    }
  }
}
