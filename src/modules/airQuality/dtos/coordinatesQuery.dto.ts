import { Transform } from "class-transformer";
import { IsNotEmpty, IsNumber, IsNumberString, Max, Min } from "class-validator";

export class CoordinatesQueryDto {
  @IsNotEmpty()
  @IsNumber()
  @Transform(({ value }) => parseFloat(value))
  @Min(-90)
  @Max(90)
  latitude!: number;

  @IsNotEmpty()
  @IsNumber()
  @Transform(({ value }) => parseFloat(value))
  @Min(-180)
  @Max(180)
  longitude!: number;
}