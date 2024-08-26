import { Router } from 'express';
import AirQualityController from './airQuality.controller';
import { validateCoordinatesQuery } from '../../middleware/airQuality.middleware';

const airQualityRouter = Router();
const airQualityController = new AirQualityController();

airQualityRouter.get("/", validateCoordinatesQuery, airQualityController.getAirQuality);

export default airQualityRouter;