import { AirQualityService } from './airQuality.service';
import { Request, Response } from "express";

export default class AirQualityController {
  private readonly airQualityService: AirQualityService;
  constructor() {
    this.airQualityService = new AirQualityService();
    this.getAirQuality = this.getAirQuality.bind(this);
    this.getMostPolluted= this.getMostPolluted.bind(this);
  }

  async getAirQuality(req: Request, res: Response) {
    try {
      const { latitude, longitude } = req.query;
      const airQualityData = await this.airQualityService.getByCoordinates(
        Number(latitude),
        Number(longitude)
      );

      return res.json(airQualityData);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Error retrieving data" });
    }
  }

  async getMostPolluted(req: Request, res: Response) {
    try {
      const mostPollutedData = await this.airQualityService.getMostPolluted();
      return res.json(mostPollutedData);
    } catch (error) {
       return res.status(500).json({ error: "Error retrieving most polluted data" });
    }
  }
}