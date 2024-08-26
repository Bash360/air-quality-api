import { Router } from 'express';
import AirQualityController from './airQuality.controller';
import { validateCoordinatesQuery } from '../../middleware/airQuality.middleware';

const airQualityRouter = Router();
const airQualityController = new AirQualityController();

/**
 * @swagger
 * /airquality:
 *   get:
 *     summary: Get air quality data by coordinates
 *     parameters:
 *       - in: query
 *         name: latitude
 *         required: true
 *         schema:
 *           type: number
 *         description: Latitude of the location
 *       - in: query
 *         name: longitude
 *         required: true
 *         schema:
 *           type: number
 *         description: Longitude of the location
 *     responses:
 *       200:
 *         description: Successful operation
 *       400:
 *         description: Invalid query parameters
 */
airQualityRouter.get("/", validateCoordinatesQuery, airQualityController.getAirQuality);

export default airQualityRouter;