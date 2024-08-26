import { Router } from "express";
import airQualityRouter from './modules/airQuality/airQuality.route';
const router = Router();
router.use("/airquality", airQualityRouter);
export default router;