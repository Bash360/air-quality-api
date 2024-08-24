export class AirQualityDto{
  pollution: Pollution;
}

class Pollution {
  ts: Date;
  aqius: string;
  mainus: string;
  aqicn: string;
  maincn: string;
}
