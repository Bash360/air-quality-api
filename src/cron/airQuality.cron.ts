import cron from "node-cron";
import { AirQualityService } from "../modules/airQuality/airQuality.service";

const airQualityService = new AirQualityService();

const task = async () => {
  try {
    console.info("Task to add air quality for paris every minute");
    await airQualityService.addAirQualityParis();
  } catch (error) {
    console.error("Error occurred during the cron job:", error);
  }
};

const scheduledTask = cron.schedule("* * * * *", task);

export default scheduledTask;
