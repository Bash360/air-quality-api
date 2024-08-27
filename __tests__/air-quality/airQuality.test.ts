import request from "supertest";
import express from "express";
import airQualityRouter from "../../src/modules/airQuality/airQuality.route";
import AppDataSource  from "../../src/config/dataSource";

const app = express();
app.use(express.json());
app.use("/api/airquality", airQualityRouter);

beforeAll(async () => {
  await AppDataSource.initialize();
});

afterAll(async () => {
  await AppDataSource.destroy();
});
describe("Get air quality by latitude, longitude /api/airquality", () => {
  it("should return 400 if latitude or longitude is missing", async () => {
    const res = await request(app).get("/api/airquality");
    expect(res.status).toBe(400);
  });

  it("should return 400 if latitude or longitude is invalid", async () => {
    const res = await request(app)
      .get("/api/airquality")
      .query({ latitude: "some latitude", longitude: "string longitude" });
    expect(res.status).toBe(400);
  });

  it("should return 200 and air quality data when valid coordinates are provided", async () => {
    const res = await request(app)
      .get("/api/airquality")
      .query({ latitude: 40.7128, longitude: -74.006 });
    const {
      Result: { pollution },
    } = res.body;
    expect(res.status).toBe(200);
    expect(pollution).toHaveProperty("ts");
    expect(pollution).toHaveProperty("aqius");
    expect(pollution).toHaveProperty("mainus");
    expect(pollution).toHaveProperty("aqicn");
    expect(pollution).toHaveProperty("maincn");
  });
});

describe("Get Date and time when paris is the most polluted /api/airquality/most-polluted ", () => {
  it("should return 200", async () => {
    const res = await request(app).get("/api/airquality/most-polluted");
    const { Result } = res.body;
    expect(res.status).toBe(200);
    expect(Result).toHaveProperty("dateTime");
    expect(Result).toHaveProperty("aqius");
  });
});
