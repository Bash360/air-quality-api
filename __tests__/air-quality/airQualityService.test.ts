import { AirQualityService } from "../../src/modules/airQuality/airQuality.service";

const airQuality = new AirQualityService();

test("Test Air Quality getByCoordinates", async () => {
  expect(airQuality.getByCoordinates(45, 36)).toBe(3);
});
