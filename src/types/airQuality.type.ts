export type AirQualityType = {
  city: string;
  state: string;
  country: string;
  latitude: number;
  longitude: number;
  pollution: {
    ts: Date;
    aqius: number;
    mainus: string;
    aqicn: number;
    maincn: number;
  };
};
