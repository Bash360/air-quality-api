export class AirQualityDto{
  pollution!: Pollution;
}

class Pollution {
  ts!: Date;
  aqius!: number;
  mainus!: string;
  aqicn!: number;
  maincn!: number;
}
