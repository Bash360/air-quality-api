import cron from "node-cron";
import { AirQualityService } from "../modules/airQuality/airQuality.service";
import logger from "../config/logger";

const airQualityService = new AirQualityService();

const task = async () => {
  try {
    logger.info("cron-task to add air quality for paris every minute");
    await airQualityService.addAirQualityParis();
  } catch (error) {
    logger.error("cron-task Error occurred during the cron job:",error);
  }
};

const scheduledTask = cron.schedule("* * * * *", task);

export default scheduledTask;
