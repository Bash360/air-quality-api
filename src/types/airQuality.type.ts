export type SimplifiedAirQuality = {
  city: string;
  state: string;
  country: string;
  latitude: number;
  longitude: number;
  pollution: {
    ts: Date;
    aqius: string;
    mainus: string;
    aqicn: string;
    maincn: string;
  };
};
