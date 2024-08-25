import axios from "axios";
import Utility from "../../src/common/helpers/utilities";
import { AirQualityType } from "../../src/types/airQuality.type";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

const mockResponse = {
  status: "success",
  data: {
    data: {
      city: "Uzgen",
      state: "Osh",
      country: "Kyrgyzstan",
      location: { type: "Point", coordinates: [73.30068, 40.76994] },
      current: {
        pollution: {
          ts: "2024-08-25T15:00:00.000Z",
          aqius: 57,
          mainus: "p2",
          aqicn: 17,
          maincn: "p2",
        },
        weather: {
          ts: "2024-08-25T16:00:00.000Z",
          tp: 22,
          pr: 1011,
          hu: 25,
          ws: 2.24,
          wd: 125,
          ic: "01n",
        },
      },
    },
  },
};

mockedAxios.get.mockResolvedValue(mockResponse);

test("Should be truthy for valid coordinates", () => {
  expect(Utility.isValidCoordinates(21.12345, 30.6789)).toBeTruthy();
});

test("Should be falsy for invalid coordinates", () => {
  expect(Utility.isValidCoordinates(100, 230)).toBeFalsy();
});

test("Should throw for invalid coordinates", async () => {
  await expect(Utility.getByCoordinates(109, 240)).rejects.toThrow(
    "invalid value for latitude/longitude"
  );
});

test("Should return correct air quality data", async () => {
  const result: AirQualityType = await Utility.getByCoordinates(
    40.7128,
    -74.006
  );

  expect(result).toEqual({
    city: "Uzgen",
    state: "Osh",
    country: "Kyrgyzstan",
    latitude: 73.30068,
    longitude: 40.76994,
    pollution: {
      ts: "2024-08-25T15:00:00.000Z",
      aqius: 57,
      mainus: "p2",
      aqicn: 17,
      maincn: "p2",
    },
  });
});
