import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { Request, Response, NextFunction } from "express";
import { CoordinatesQueryDto } from "../modules/airQuality/dtos/coordinatesQuery.dto";


export const validateCoordinatesQuery = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const query = plainToInstance(CoordinatesQueryDto, req.query);
  const errors = await validate(query);

  if (errors.length > 0) {
    return res.status(400).json({
      message: "Invalid query parameters",
      errors: errors.map((error) => error.constraints),
    });
  }

  next();
};
